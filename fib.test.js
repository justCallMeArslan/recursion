import { fibLoop, fibRecur } from "./fib";

test("fib sequence for 3", () => {
    expect(fibLoop(3)).toEqual([0, 1, 1, 2])
})

test("fib sequence for 0", () => {
    expect(fibLoop(0)).toEqual([0])
})

test("string as argument", () => {
    expect(fibLoop("4")).toEqual(undefined)
})

test("decimals", () => {
    expect(fibLoop(4.2)).toEqual(undefined)
})

test("fib sequence for 3", () => {
    expect(fibRecur(3)).toEqual([0, 1, 1, 2])
})

test("fib sequence for 0", () => {
    expect(fibRecur(0)).toEqual([0])
})

test("string as argument", () => {
    expect(fibRecur("4")).toEqual(undefined)
})

test("decimals", () => {
    expect(fibRecur(4.2)).toEqual(undefined)
})