# commit-sudoku/animation

Code to generate an animated GIF showing evolution of the Sudoku board.

## Requirements
* Node 6+

## Running locally
```
cd animation
npm install
npm run generate
```

## Uploading GIF to surge
[Surge.sh](https://surge.sh) is a platform for easily publishing static websites and content.

To publish the generated GIF to Surge.sh, generate a [token](https://surge.sh/help/integrating-with-travis-ci) and provide it via environment variables:

```
SURGE_LOGIN=<your login email> SURGE_TOKEN=<Surge token> CI=1 node ./index.js
```

## How it works

1. Get list of commit SHAs using `git log`
1. For each commit, get state of the Sudoku table using `git show ${SHA}:READEME.md`
1. Render each state in headless browser via [Puppeteer](https://github.com/GoogleChrome/puppeteer) to PNG
1. Create animated GIF from generated PNGs using [gifencoder](https://github.com/eugeneware/gifencoder)
1. Optionally, upload generated GIF to [Surge.sh](http://commit-sudoku.surge.sh/output.gif)
