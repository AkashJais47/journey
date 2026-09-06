let expenses = [
    { name: "Food", amount : 200 },
    { name: "Travel", amount : 500 },
    { name: "Movie", amount : 80 },
    { name: "Books", amount : 300 }
]

let ants = expenses.filter(hits => hits.amount > 200)

try {
    let data = JSON.parse(localStorage.getItem("expenses"))
} catch (error) {
    console.log("Error! Error! Error!")
    console.error(error)
}

let data = localStorage.getItem("expenses")
if (typeof data === "string") {
    console.log("true")
} else {
    console.log("false")
}

try {
        let data = JSON.parse(localStorage.getItem("expenses"))
    if (Array.isArray(data)) {
    c   onsole.log("Everything is fine!")
    } else {
        console.log("Abort!")
    }
} catch (error) {
    console.error(error)
}

function killaCam(name, amount) {
    return {
        name: name,
        amount: amount
    }
}

function chancesTheyCouldBeThin(name, amount) {
    if (name.trim() !== "" && amount >= 0) {
        return killaCam(name, amount)
    } else {
        return null
    }
}