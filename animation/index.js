const execSync = require('child_process').execSync;
const fs = require('fs');
const GIFEncoder = require('gifencoder');
const makeTempdir = require('tempdir');
const pngFileStream = require('png-file-stream');
const progressBar = require('progress');
const puppeteer = require('puppeteer');

const HEADFULL_MODE = process.env.HEADFULL_MODE ? true : false;
const encoder = new GIFEncoder(500, 500);

process.on('unhandledRejection', e => { throw e; });

(async function() {
  await main();
})();

async function main() {
  const commitSHAs = execSync('git log --reverse --format=format:%H').toString().split('\n');
  console.log(`Found ${commitSHAs.length} commits.`);

  const browser = await puppeteer.launch({
    ignoreHTTPSErrors: true,
    headless: !HEADFULL_MODE,
    args: ['--allow-running-insecure-content', '--no-sandbox', ],
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1024,
    height: 768,
  });

  const tempdir = await makeTempdir();
  console.log(`\nGenerating screenshots in: ${tempdir}`);
  const bar = new progressBar('  [:bar] :current/:total :percent (:rate/s)', { total: commitSHAs.length });
  for (let i = 0; i < commitSHAs.length; ++i) {
    bar.tick();
    const commitSHA = commitSHAs[i];
    const tableState = getTableStateForCommit(commitSHA);
    if (!tableState) {
      continue;
    }
    await page.goto(`data:text/html,${HTMLHeader} ${tableState}`);
    await delay(100);
    const filename = `${tempdir}/T${new Date().getTime()}.png`;
    await page.screenshot({
      path: filename,
      clip: { x: 0, y: 0, width: 500, height: 500, },
    });
  }
  console.log('\nCreating session GIF...');
  await delay(5000);
  await browser.close();

  const outputdir = await makeTempdir();
  const outputGIF = `${outputdir}/output.gif`;
  await pngFileStream(`${tempdir}/T*.png`)
    .pipe(encoder.createWriteStream({ repeat: 0, delay: 200, quality: 50 }))
    .pipe(fs.createWriteStream(outputGIF));
  console.log(`Created session GIF: ${outputGIF}`);
  await delay(5000);
  execSync(`ls -lhta ${outputdir}`, { stdio: [0, 1, 2] });

  if (process.env.CI && process.env.SURGE_LOGIN && process.env.SURGE_TOKEN) {
    console.log('Uploading GIF to: http://commit-sudoku.surge.sh/output.gif');
    execSync(`SURGE_TOKEN=${process.env.SURGE_TOKEN} npx surge ${outputdir} commit-sudoku.surge.sh`, { stdio: [0, 1, 2] });
  }
}

function getTableStateForCommit(commitSHA) {
  const readmeContents = execSync(`git show ${commitSHA}:README.md`).toString().split('\n');
  const tableState = [];
  let shoudlIncludeLine = false;
  for (let i = 0; i < readmeContents.length; ++i) {
    const line = readmeContents[i];
    if (line.includes('<table>')) {
      shoudlIncludeLine = true;
    }
    if (shoudlIncludeLine) {
      tableState.push(line);
    }
    if (line.includes('</table>')) {
      break;
    }
  }
  if (tableState.length) {
    const commitDetails = execSync(`git show --no-patch --format="format:%ci<br>%aE" ${commitSHA}`).toString().trim();
    tableState.push(`<br><span style="color: gray;">${commitDetails}</span>`);
  }
  return tableState.join('');
}

const HTMLHeader = `
<html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://rawgit.com/sindresorhus/github-markdown-css/gh-pages/github-markdown.css">
    <style>
    	.markdown-body {
    		box-sizing: border-box;
    		min-width: 200px;
    		max-width: 980px;
    		margin: 0 auto;
    		padding: 45px;
    	}

    	@media (max-width: 767px) {
    		.markdown-body {
    			padding: 15px;
    		}
    	}

      td {
        min-width: 37;
        height: 37;
      }
    </style>
  </head>
  <body>
    <article class="markdown-body">
`;


function delay(time) {
  return new Promise(function(fulfill) {
    setTimeout(fulfill, time);
  });
}
