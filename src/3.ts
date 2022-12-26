import { fd } from "./helpers/fetch.js"
import { sum } from "./helpers/sum.js"

const input = await fd("https://adventofcode.com/2022/day/3/input")

const letters = ` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`

// const answer = sum(
// 	input
// 		.split("\n")
// 		.map((line) => {
// 			const half = line.length / 2
// 			const left = line.slice(0, half)
// 			const right = line.slice(half)
//
// 			let theOne: string = ""
//
// 			Array.from(left).forEach((l) => {
// 				if (right.includes(l)) {
// 					theOne = l
// 				}
// 			})
//
// 			return theOne
// 		})
// 		.map((letter) => letters.indexOf(letter))
// )

const answer = sum(
	((arr: string[]) => {
		const processed = []

		arr.forEach((v, i) => {
			if (i % 3 === 0) processed.push([])
			processed[processed.length - 1].push(v)
		})

		return processed
	})(input.split("\n")).map((group) => {
		let theOne = ""
		Array.from(group[0]).forEach((letter: string, i) => {
			if (group[1].includes(letter) && group[2].includes(letter))
				theOne = letter
		})

		const num = letters.indexOf(theOne)
		return num
	})
)

console.log(answer)
