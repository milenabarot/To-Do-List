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
        <button class="${DONE}" id="${id}" onclick="completeToDo(event)"></button>
        <input type="text" class="text ${LINE}" value="${toDo}">
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
 
}



// remove to do function

const removeToDo = function (event) {
    
    event.target.parentElement.remove();
    LIST[event.target.id].bin = true;

    
}


// Local storage











// class Citreon {
//     constructor(model, topSpeed) {
//         this.brand = 'Citreon';
//         this.wheels = 4;
//         this.model = model;
//         this.topSpeed = topSpeed;
//     }
    
//     getTopSpeed() {
//         console.log(`The ${this.brand} ${this.model} has a top speed of ${this.topSpeed} mph`)
//     }

//     introduce() {
//         console.log(`Hello, I am a ${this.brand} ${this.model} and I have a ${this.wheels} wheels.`)
//     }
// }

// const c1 = new Citreon('C1', 120);
// const c3 = new Citreon('C3', 150);

// c1.introduce();
// c3.introduce();