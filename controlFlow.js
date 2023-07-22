// if and else
console.log("<------ IF AND ELSE STATEMENTS -------->")

let hour = 21;

if (hour > 6 && hour < 12) {
    console.log("good morning");
} else if (hour > 12 && hour < 18) {
    console.log("good afternoon");
} else console.log("good evening");

// if an element has a tag name than do this (manipulating the DOM)
let x = document.getElementsByTagName('h1')[0];

if(x.id === "header") {
    x.style.color = "blue"
} else x.style.color = "red";

// display message based on user input
function myFunction() {
    var letter = document.getElementById("myInput").value;
    var text;
    
    //if letter is a
    if(letter === "a") {
        text = "spot on! Good Job!"
    } else if (letter === "b" || letter === "c") {
        text = "close but no cigar"
    } else {
        text = "letter is not an option";
    }
    document.getElementById("demo").innerHTML = text;
}

function numFunction() {
    let input, text
    input = document.getElementById("num").value;
    
    if(isNaN(input) || input < 1 || input > 10) {
        text = "input invalid"
    } else text = "input OK"

    document.getElementById("text").innerHTML = text
}

function changeImage() {
    let image = document.getElementById("myImage")

    if (image.src.match("bulbon") ) {
        image.src = "images/pic_bulboff (1).gif";
    } else image.src = "images/pic_bulbon.gif";
}


// switch and case ~ if and else are more common
console.log("<------ SWITCH AND CASE -------->")

let role = 'Guest' //case sensitive

switch (role) {
    case "Guest":
        console.log("Guest User")
    // need to add break to jump out of switch block if case is true
    break;

    case "user":
        console.log("Existing user")
        break;

    default:
        console.log('Unknown user')
}

// For loops
console.log("<------ FOR LOOPS -------->")

for (let i = 1; i < 5; i++) {
    // console.log("hello world", i); //will run code 4 times
    if (i % 2 !== 0) console.log(i)
}

// While loops
console.log("<------ WHILE LOOPS -------->")

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }


// Do-While loops 
console.log("<------ DO-WHILE LOOPS -------->")
// always executed at least once even if the condition is false ~ not used very often

let i = 0; 
do {
    if(i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);

// For-in loops USED FOR ITERATING OBJECTS
console.log("<------ FOR-IN LOOPS -------->")

const person = {
    name: "ash",
    age: 20
};

for (let key in person) { // MAINLY USED FOR OBJECTS
    console.log(key);
}

const colors = ['red', 'green', 'blue']; // CAN BE USED FOR ARRAYS, NOT STANDARD
for (let index in colors) {
    console.log(index, colors[index]);
}

// dot notation ~ the property is known
console.log(person.name);
//bracket notation ~ property is unknown
console.log(person['age']);

// For-of loops USED FOR ITERATING OVER ARRAYS
console.log("<------ FOR-OF LOOPS -------->")

const animals = ['panda', 'monkey', 'tiger']

for(let animal of animals) {
    console.log(animal)
}

// BREAK AND CONTINUE
console.log("<------ BREAK AND CONTINUE -------->")

let num = 0;
while(num <= 10) {
    if (num === 5) break; // will break out of loop if num = 5 
}

