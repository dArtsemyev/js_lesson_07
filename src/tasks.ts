export let sum = (a: number, b: number) => {
    return a + b
}
export let restSum = (...numbers: Array<number>) => {
    return numbers.reduce((acc, el) => acc + el)
}


export type ActionType = {
    type: "sum" | "mult" | "sub" | "div"
}
export function calculator(a: number, b: number, action: ActionType) {
    switch (action.type) {
        case "sum":
            return a + b
        case "mult":
            return a * b
        case "sub":
            return a - b
        case "div":
            return a / b
        default:
            return "Unknown type of action"
    }
}

export type Student = {
    name: string
    friends: Array<string>
}
export type Group = Array<Student>
export function copyStudentGroup (group: Group): Group {
    return group.map(st => ({...st, friends: [...st.friends]}))
}