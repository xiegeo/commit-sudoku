# commit-sudoku



<!-- space reserved to line up cells with line numbers -->



<table>
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
    <td>4
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
</table>




## Rules

There are two types of pull requests, moves and others.

A move must only inclued filling in one number in one cell in the puzzle.

* A player can only make at most one move, which is adding a number, a day.
* A player can remove any move made by himself or herself without the above limitation.
* Moves are accepted in order of first submition.
* Conflicting moves are skipped, they can be resubmited ASAP once fixed.
* Multiple players can submit a single joint pull requests consistent of many commits.

All other commits should improve the project in some way.

* Other commits must not change the values in the puzzle. They should also preserve git blame as best as possible.
* They can be anything else typical of any project.
* They can even change the rules, but not apply retroactivly.

## TODO:
* Accept pull requests.
