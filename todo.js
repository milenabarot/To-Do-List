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

let LIST, id;

// get item from local storage 

let data = localStorage.getItem("TODO");

// check if data is not empty
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length; //set the id to the last one in the list
    loadList(LIST); // load the list to the use interface
} else {
    // if data is empty
    LIST = [];
    id = 0;
}
// load items to user's interface

function loadList(array) {
    array.forEach(function (item) {    //callback function- passing a function as a parameter 
        addToDo(item.name, item.id, item.done, item.bin);
    });
}

// clear the local storage
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload(); 
})


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
        <button class="${DONE}" id="${id}" onclick="completeToDo(event)"></button>
        <input id="${id}" type="text" oninput="editToDo(event)" class="text ${LINE}" value="${toDo}">
        <button class="removeButton" id="${id}" onclick="removeToDo(event)">Remove</button>  
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

        // add item to local storage (this code must be written everywhere where the LIST array is updated) TODO name in local storage is defined here after an item is added to the LIST
        
        localStorage.setItem("TODO", JSON.stringify(LIST));
        
        id++;
    }
    input.value = "";
}

// complete to do function

const completeToDo = function (event) {

    const listItemElement = event.target;

    listItemElement.classList.toggle(CHECK);
    listItemElement.classList.toggle(UNCHECK);
    listItemElement.nextElementSibling.classList.toggle(LINE_THROUGH);
    
    // making the done property in the correct object equal to the opposite of the value it currently is - changing false to true and true to false- to update data store, so recognises if needs to be styled as CHECK or UNCHECK class 
    
    LIST[listItemElement.id].done = !LIST[listItemElement.id].done;

    // add item to local storage (this code must be written everywhere where the LIST array is updated)

    localStorage.setItem("TODO", JSON.stringify(LIST));
 
}



// remove to do function

const removeToDo = function (event) {
    
    event.target.parentElement.remove();
    LIST[event.target.id].bin = true;

    // add item to local storage (this code must be written everywhere where the LIST array is updated)
    localStorage.setItem("TODO", JSON.stringify(LIST));
    
}



// Edit function to edit list items

const editToDo = function (event) {

    const itemData = event.target.value;
    
//getting the id of the object in the LIST, finding the name which is the input value and making it equal to the new value you just typed in

    LIST[event.target.id].name = itemData;

    localStorage.setItem("TODO", JSON.stringify(LIST));


}




