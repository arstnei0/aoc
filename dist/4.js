import { fd } from "./helpers/fetch.js";
const input = await fd("https://adventofcode.com/2022/day/4/input");
const answer = input
    .split("\n")
    .map((line) => line.split(",").map((range) => range.split("-").map((n) => parseInt(n))))
    // Now proccessed from string to list of numbers
    .map((pair, i, list) => {
    let contains = false;
    pair.forEach((elf) => {
        list.forEach((pair, _i) => {
            if (_i === i)
                return;
            pair.forEach((elfc) => {
                if (elfc[0] >= elf[0] && elfc[1] <= elf[1])
                    contains = true;
            });
        });
    });
    return contains;
})
    // got an array of boolean
    .reduce((prev, curr) => curr ? prev + 1 : prev, 0);
console.log(answer);
