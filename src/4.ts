import { fd } from "./helpers/fetch.js"

const input = await fd("https://adventofcode.com/2022/day/4/input")

const answer = input
	.split("\n")
	.map((line) =>
		line.split(",").map((range) => range.split("-").map((n) => parseInt(n)))
	)
	// Now proccessed from string to list of numbers
	.map((pair: [[number, number], [number, number]], i, list) => {
		let contains = false

		if (
			(pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) ||
			(pair[1][0] >= pair[0][0] && pair[1][1] <= pair[0][1])
		)
			contains = true

		return contains
	})
	// got an array of boolean
	.reduce((prev, curr) => (curr ? prev + 1 : prev), 0)

console.log(answer)
