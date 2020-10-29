   // Define Elements

const clear = document.querySelector(".clear");
const dateElement = document.querySelector("#date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Class names

const CHECK = "tickBox";
const UNCHECK = "checkBox";
const LINE_THROUGH = "lineThrough";

// Variables for list and id

let LIST = [];
let  id = 0;

// Show today's date

const options = { weekday: "long", month: "short", day: "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

// add to do function & added more variables; id, done and bin 

function addToDo(toDo, id, done, bin) {

    if (bin) { return; }
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const item = `<li class="item">
        <button class="${DONE}" id="${id}" onclick=""></button>
        <input type="text" class="text ${LINE}" value="${toDo}">
        <button class="removeButton" id="${id}" onclick="">Remove</button>  
        </li>`;
    
    const position = "beforeend";

    list.insertAdjacentHTML(position, item);

}

// add an item to the list when clicking add button - onclick funciton
// Pushing new value into array List with an object

const addItemButtonClick = function () {
    const toDoValue = input.value;

    //if input isn't empty
    if (toDoValue) {
        addToDo(toDoValue, id, false, false);

        LIST.push({
            name: toDoValue,
            id: id,
            done: false,
            bin: false
        });
        id++;
    }
    input.value = "";
}

// complete to do function







// remove to do function





// 
