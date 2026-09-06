function createExpense (name, amount) {
    return {
        name: name,
        amount: amount
    }
}

let expense = createExpense("Groceries", 500)
console.log(expense)

let numbers = [4, 15, 8, 21, 30, 7]
let finder = numbers.find((jinx) => jinx > 10 && jinx % 2 == 0)

let expenses = [
    { name: "Food", amount: 300},
    { name: "Travel", amount: 500},
    { name: "Books", amount: 200},
]
let mapper = expenses.map(function (event) {
    return event.name
})