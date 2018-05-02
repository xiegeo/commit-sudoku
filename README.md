# commit-sudoku

[![Build Status](https://travis-ci.org/xiegeo/commit-sudoku.svg?branch=master)](https://travis-ci.org/xiegeo/commit-sudoku)



<!-- space reserved to line up cells with line numbers -->

<table>
  <tr>
    <td>1
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>9
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>4
  <tr>
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>4
    <td>5
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
  <tr>
    <td>4
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>8
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
  <tr>
    <td>&nbsp;
    <td>4
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
  <tr>
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
  <tr>
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
  <tr>
    <td>&nbsp;
    <td>&nbsp;
    <td>4
    <td>&nbsp;
    <td>7
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
  <tr>
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>7
    <td>&nbsp;
    <td>&nbsp;
  <tr>
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>&nbsp;
    <td>2
    <td>&nbsp;
    <td>9
    <td>&nbsp;
    <td>&nbsp;
</table>




## Rules

There are two types of pull requests, moves and others.

A move must only include filling in one number in one cell in the puzzle.

* A player can only make at most one move a day.
* A player can remove any moves made by himself or herself without the above limitation.
* Moves are accepted in order of first submission.
* Conflicting moves are skipped, they can be resubmitted ASAP once fixed.
* Multiple players can submit a single joint pull requests consistent of many moves, one from each player.

All other pull requests should improve the project in some way. Explained with what changes are made, and how it makes the project better.

* Other pull requests must not include move commits. They should also preserve git blame for moves as best as possible.
* Acceptance does not follow the rule of moves.
* They can be anything else typical of any project.
* They can even change the rules, but not apply retroactively.


## Testing

There is CI integration to make pull requests more flashy.
You can run the tests locally with `go test` if you have go installed. 
You are also welcome to add redundant tests using other languages or improve existing ones.

