let addBtn =  document.getElementById("addBtn")
let expenseInput = document.getElementById("expenseInput")
let spentInput = document.getElementById("spentInput")
let listOfExpenses = document.getElementById("listOfExpenses")
let final = document.getElementById("final")

let finalNum = Number(final.textContent)
let expenseStorer = []
let savedExpense = JSON.parse(localStorage.getItem(("expenses")))

if (savedExpense !== null) {
    expenseStorer = savedExpense

    for (let i = 0; i < expenseStorer.length; i++) {
        let savedExp = expenseStorer[i]

        renderExpense(savedExp)
        finalNum += Number(savedExp.spentKey)
    }
    show(finalNum)
}

function show(finalNum) {
    if(finalNum < 0) {
                final.textContent = "-₹" + Math.abs(finalNum)
            } else {
                final.textContent = "₹" + finalNum
            }
}

function renderExpense(expenseObj) {
    let expense = expenseObj.expenseKey
    let spent = expenseObj.spentKey
    let spentNum = Number(spent)
    let li = document.createElement("li")

    if (spentNum < 0) {
            li.textContent = expense + "   " + "-₹" + Math.abs(spent)
        } else {
            li.textContent = expense + "   " + "₹" + spent
        }

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.style.marginLeft = "20px"

        li.append(deleteBtn)
        listOfExpenses.append(li)

        deleteBtn.addEventListener("click", () => {
            finalNum -= spentNum
            show(finalNum)
            deleteBtn.parentElement.remove()
            let index = expenseStorer.findIndex((item) => item.id === expenseObj.id)
            expenseStorer.splice(index, 1)
            localStorage.setItem("expenses", JSON.stringify(expenseStorer))
        })
}

function addExpense() {
    let expense = expenseInput.value
    let spent = spentInput.value

    if(expense.trim() !== "" && spent.trim() !== "") {
        expenseStorer.push({
            id: Date.now(),
            expenseKey: expense,
            spentKey: spent
        })

        localStorage.setItem("expenses", JSON.stringify(expenseStorer))

        let spentNum = Number(spent)
        finalNum += spentNum

        renderExpense(expenseStorer[expenseStorer.length - 1])
        
        show(finalNum)

        expenseInput.value = ""
        spentInput.value = ""
    }
}

expenseInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter")
        addExpense()
})

spentInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter")
        addExpense()
})