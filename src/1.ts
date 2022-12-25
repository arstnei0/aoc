import { fd } from "./helpers/fetch.js"

const input = await fd("https://adventofcode.com/2022/day/1/input")

const sum = (arr: number[]) => arr.reduce((partialSum, a) => partialSum + a, 0)

const answer = Math.max(
	...input
		.trimEnd()
		.split("\n\n")
		.map((elf) => elf.split("\n").map((cal) => parseInt(cal)))
		.map((elf) => sum(elf))
)

console.log(answer)
