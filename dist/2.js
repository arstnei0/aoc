import { fd } from "./helpers/fetch.js";
const input = await fd("https://adventofcode.com/2022/day/2/input");
const ABC = ["A", "B", "C", "A", "B", "C", "A", "B", "C"];
const XYZ = ["X", "Y", "Z", "X", "Y", "Z"];
const rounds = input.split("\n").map((line) => line.split(" "));
const rpsScoreMap = {
    A: 1,
    B: 2,
    C: 3,
};
const roundResultScoreMap = {
    Z: 6,
    Y: 3,
    X: 0,
};
const answer = rounds.reduce((prev, curr) => prev +
    rpsScoreMap[ABC[ABC.indexOf(curr[0]) + XYZ.indexOf(curr[1]) + 2]], 0) + rounds.reduce((prev, curr) => prev + roundResultScoreMap[curr[1]], 0);
console.log(answer);
