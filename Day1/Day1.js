const fs = require("fs");

const puzzleData = fs
  .readFileSync("Day1/puzzleData.txt")
  .toString()
  .split("\n\n");

const perElf = puzzleData.map((a) => a.split("\n").map(Number));
const sum = perElf.map((a) => a.reduce((a, b) => a + b, 0));

function totalCalories() {
  return sum.sort((a, b) => a - b).pop();
}
// console.log(totalCalories());

function topThreeElves() {
  return sum
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((a, b) => a + b, 0);
}
console.log(topThreeElves());
