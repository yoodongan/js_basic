const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
const toDos = [];
function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newToDo);
    toDos.push(newToDo);
    saveToDos();
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newtodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newtodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}

toDoForm.addEventListener("submit", handleToDoSubmit);

