let btn = document.getElementById("btn")

btn.addEventListener("click", (event) => {
    if (event.target.textContent === "Click Me!") {
        event.target.textContent = "Clicked!"
       } else if (event.target.textContent === "Clicked!"){
        event.target.textContent = "Click Me!"
    }
})