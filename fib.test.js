import { fibLoop } from "./fib";

test("fib sequence for 3", () => {
    expect(fibLoop(3)).toEqual([0, 1, 1, 2])
})

test("string as argument", () => {
    expect(fibLoop("4")).toEqual(undefined)
})

test("decimals", () => {
    expect(fibLoop(4.2)).toEqual(undefined)
})