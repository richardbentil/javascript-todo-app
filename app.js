//get the elements
const input = document.querySelector("#taskInput")
const button = document.getElementById("addButton")
const tasks = document.querySelector("#taskList")

//add tasks to the list of tasks

//delete task from the tasks list
button.addEventListener("click", () => {
   
    let value = input.value.trim();

    if(value === "") return;

    //create an element
    let li = document.createElement("li");
    li.textContent = value;

    //create delete button to the end of the li
    let deletButton = document.createElement("button");
    deletButton.textContent = "Delete";
    deletButton.style.backgroundColor = "red";

    deletButton.onclick = () => {
        tasks.removeChild(li)
    }

    //append the button to the li
    li.appendChild(deletButton);

    //append element to list of tasks
    tasks.appendChild(li);

    //clear the input element
    input.value = "";
})