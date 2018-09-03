# commit-sudoku

[![Build Status](https://travis-ci.org/xiegeo/commit-sudoku.svg?branch=master)](https://travis-ci.org/xiegeo/commit-sudoku)



<!-- space reserved to line up cells with line numbers -->

<table>
  <tr>            <!-- Row 1 -->
    <td>1
    <td>5
    <td>7
    <td>2
    <td>9
    <td>6
    <td>8
    <td>3
    <td>4
  <tr>            <!-- Row 2 -->
    <td>8
    <td>9
    <td>2
    <td>3
    <td>4
    <td>5
    <td>6
    <td>1
    <td>7
  <tr>            <!-- Row 3 -->
    <td>4
    <td>3
    <td>6
    <td>1
    <td>8
    <td>7
    <td>2
    <td>5
    <td>9
  <tr>            <!-- Row 4 -->
    <td>7
    <td>4
    <td>1
    <td>6
    <td>5
    <td>&nbsp;
    <td>3
    <td>9
    <td>8
  <tr>            <!-- Row 5 -->
    <td>9
    <td>2
    <td>8
    <td>7
    <td>3
    <td>4
    <td>5
    <td>6
    <td>1
  <tr>            <!-- Row 6 -->
    <td>3
    <td>6
    <td>5
    <td>8
    <td>1
    <td>9
    <td>4
    <td>7
    <td>2
  <tr>            <!-- Row 7 -->
    <td>6
    <td>8
    <td>4
    <td>9
    <td>7
    <td>3
    <td>1
    <td>2
    <td>5
  <tr>            <!-- Row 8 -->
    <td>2
    <td>1
    <td>9
    <td>5
    <td>6
    <td>8
    <td>7
    <td>4
    <td>3
  <tr>            <!-- Row 9 -->
    <td>5
    <td>7
    <td>3
    <td>4
    <td>2
    <td>1
    <td>9
    <td>8
    <td>6
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

## Evolution

![Evolution of the board](https://commit-sudoku.surge.sh/output.gif)

More details [here](animation/README.md).

## Testing

There is CI integration to make pull requests more flashy.
You can run the tests locally with `go test` if you have go installed.
You are also welcome to add redundant tests using other languages or improve existing ones.
