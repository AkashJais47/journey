let numbers = [2, 4, 5, 7, 8, 9]
let senseiPressure = numbers.filter(function(num) {
    return num % 2 === 0
})

let prices = [100, 250, 500, 750]
let senseiGotLoadSoDiscountIsGiven = prices.map(function(price) {
    return (price * 4 / 5)
})

let expenses = [100, 250, 40, 400]
expenses.forEach(function(printer) {
    console.log("₹" + printer)
})

let bigExpense = expenses.some(number => number > 300)

let allAbove30 = expenses.every(finalOne => finalOne > 30)

let expensesAgain = [50, 120, 300, 80, 200]
let senseiOnFIre = expensesAgain.find(exp => exp > 100)

let numeros = [4, 15, 8, 21, 30, 7]
let finder = numeros.find(sensei => (sensei > 10 && sensei % 2 === 0))

let tea = expenses.filter(numx => nums > 100)
