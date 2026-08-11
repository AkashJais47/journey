let isEven = (num) => {
    if (num % 2 === 0) {
        return true
    }

    else {
        return false
    }
}

console.log(isEven(67))

for (let i = 1; i < 6; i++) {
    let stars = ""
    for (let j = 1; j <= i; j++) {
        stars = stars + "*"
    }
    console.log(stars)
}

for (let i = 5; i > 0; i++) {
    let stars = ""
    for (let j = 1; j <= i; j++) {
        stars = stars + "*"
    }
    console.log(stars)
}

let games = ["Valorant", "Minecraft", "Forza"]
console.log(games[1])

let numeros = [10, 20, 30, 40]
console.log(numeros[0])
console.log(numeros[numeros.length - 1])
console.log(numeros.length)

let laptop = {
    brand : "Lenovo",
    ram : 16,
    price : 125000
}

console.log(laptop.price)
console.log(laptop.brand)

let objectification = {
    name : "Akash",
    skills : ["HTML", "CSS", "JavaScript", "Yapping!"]
}

console.log(objectification.skills[1])

let phone = {
    brandphone : "Infinix",
    model : "Note 40X",
    details : function() {
        console.log(this.brandphone + " " + this.model)
    }
}

phone.details()

let count = 10

do {
    console.log(count)
    count--
} while (count > 0)

let star = ""
let c = 1

while (c <= 5) {
    star += "*"
    c++
}

console.log(star)

let number = 5

while (number >= 1) {
    console.log(number)
    number--
}
console.log("Done")

let even = 2

do {
    if(even % 2 !== 0) {
        even++
        continue
    }
    
    console.log(even)
    even++
} while (even <= 20)