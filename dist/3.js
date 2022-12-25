import { fd } from "./helpers/fetch.js";
const input = await fd("https://adventofcode.com/2022/day/3/input");
const answer = input.split("\n").map((line) => {
    const half = line.length / 2;
    const left = line.slice(0, half);
    const right = line.slice(half);
    let theOne = "";
    Array.from(left).forEach((l) => {
        if (right.includes(l)) {
            theOne = l;
        }
    });
    return theOne;
});
console.log(answer);
