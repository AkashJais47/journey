let roll = Math.floor(Math.random()*6) + 1

console.log("You rolled : " + roll)

if(roll === 6) {
    console.log("Lucky! Don't stick around in the 6!")
} else {
    console.log("Try again! All we had to do was...")
}