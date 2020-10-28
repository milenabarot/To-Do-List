   // Define Elements

const clear = document.querySelector(".clear");
const dateElement = document.querySelector("#date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Class names

const CHECK = "tickBox";
const UNCHECK = "checkBox";
const LINE_THROUGH = "lineThrough";

// Show today's date

const options = { weekday: "long", month: "short", day: "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do function 

function addToDo(toDo) {

    const item = `<li class="item">
        <button class="checkBox" job="complete" id="0" onclick=""></button>
        <input type="text" class="text" value="${toDo}">
        <button class="removeButton" job="delete" id="0" onclick="">Remove</button>  
        </li>`;
    
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);

}

// add an item to the list when clicking add button - onclick funciton

const addItemButtonClick = function () {
    const toDoValue = input.value;
    if (toDoValue) {
        addToDo(toDoValue);
    }
    input.value = "";
}

 