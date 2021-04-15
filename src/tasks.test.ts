import {ActionType, calculator, copyStudentGroup, Group, restSum, sum} from "./tasks";

test("sum of two numbers", () => {
    const a: number = 2
    const b: number = 3

    expect(sum(a, b)).toBe(5)
})

test("sum of several numbers", () => {
    const a: number = 10
    const b: number = 1
    const c: number = 11
    const d: number = 13
    const e: number = 100

    expect(restSum(a,b,c)).toBe(22)
    expect(restSum(a,b,d)).toBe(24)
    expect(restSum(a,b,e)).toBe(111)
    expect(restSum(a,b,c)).toBe(22)
    expect(restSum(a,b,c)).toBe(22)
})

test("calculate numbers", () => {
    const a: number = 3
    const b: number = 2

    expect(calculator(a, b, {type: "sum"})).toBe(5)
    expect(calculator(a, b, {type: "mult"})).toBe(6)
    expect(calculator(a, b, {type: "sub"})).toBe(1)
    expect(calculator(a, b, {type: "div"})).toBe(1.5)
})

test("Get copy group", () => {
    const stGroup: Group = [
        {name: "Bob", friends: ["Alex", "Nick"]},
        {name: "Alex", friends: ["Bob", "Nick"]},
        {name: "Ann", friends: ["Alex", "Bob"]}
    ]

    const copyStGroup = copyStudentGroup(stGroup)

    expect(stGroup).toEqual(copyStGroup)
    expect(stGroup).not.toBe(copyStGroup)
    expect(stGroup[0]).not.toBe(copyStGroup[0])
    expect(stGroup[0].friends).not.toBe(copyStGroup[0].friends)
})