let input = document.getElementById("taskInput")
let addBtn = document.getElementById("addBtn")
let taskList = document.getElementById("taskList")

console.log(input.value)

addBtn.addEventListener("click", (event) => {
    let task = input.value

    if (task.trim() !== "") {
        let li = document.createElement("li")
        li.textContent = task

        let doneBtn = document.createElement("button")
        doneBtn.textContent = "Done"
        doneBtn.style.marginLeft = "10px"

        let failedBtn = document.createElement("button")
        failedBtn.textContent = "Failed"
        failedBtn.style.marginLeft = "10px"

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.style.marginLeft = "10px"

        li.append(doneBtn, failedBtn, deleteBtn)
        taskList.append(li)
        input.value = ""

        doneBtn.addEventListener("click", () => {
            doneBtn.remove()
            failedBtn.remove()
            li.classList.add("green")
        })

        failedBtn.addEventListener("click", () => {
            doneBtn.remove()
            failedBtn.remove()
            li.classList.add("red")
        })

        deleteBtn.addEventListener("click", () => {
            deleteBtn.parentElement.remove()
        })
    }
})

localStorage