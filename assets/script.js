
// Variables

console.log("Variables:");

const username = "Abbas_AlTantori";
const joinYear = 2024;

let isOnline = true;
let currentLevel = 5;

console.log(username + " is level " + currentLevel);

console.log("---------------------------------------------");



// ---------------------------------------------
// Operations

console.log("Operations:");


let itemPrice = 20.00;
let quantity = 3;
let taxRate = 1.50;

let subtotal = itemPrice * quantity; // 60.00

let finalTotal = subtotal + taxRate; // 61.50

console.log("Total to pay: $" + finalTotal);
console.log("");

console.log("---------------------------------------------");


// ---------------------------------------------
// Built-in Methods



let greeting = "Hello World";



console.log(greeting.toUpperCase()); 
console.log(greeting.toLowerCase()); 


console.log("---------------------------------------------");


// ---------------------------------------------
// Arrays

const courses = ["React Course", "Go Course", "PostgreSQL Course"];

console.log("Currently Enrolled: " + courses[0]);

console.log("Courses to complete: " + courses.length;

console.log("---------------------------------------------");


// ---------------------------------------------
// Loops


const todoList = ["Buy milk", "Clean room", "Study JavaScript"];

for (let i = 0; i < todoList.length; i++) {
    console.log("TODO: " + todoList[i]);
}

console.log("---------------------------------------------");



// ---------------------------------------------
// If Statements


const correctPassword = "pleasedonthackme";
let userAttempt = "password123";

if (userAttempt === correctPassword) {
    console.log("Access Granted! Welcome in.");
} else {
    console.log("Access Denied. Try again.");
}

console.log("---------------------------------------------");

// ---------------------------------------------
// Functions

function createWelcome(name, course) {
    return "Hi " + name + ", welcome to " + course + "!";
}

function printHello(){
  console.log("Hello Everyone!")
}

console.log(createWelcome("Sarah", "Frontend 101"));
console.log(createWelcome("Ahmed", "Backend Basics"));
printHello();

console.log("---------------------------------------------");


// ---------------------------------------------
// Comparison

let highScore = 5000;
let yourScore = 5250;

let isNewRecord = yourScore > highScore;

console.log("New Record Achieved: " + isNewRecord); 


// == (Loose Equality)
// Checks if values are IDENTICAL in value only
if ("2" == 2) { } // True

// === (Strict Equality)
// Checks if values are IDENTICAL in both value AND type.
if ("2" === 2) { } // False

// !== (Strict Inequality)
// Checks if values are DIFFERENT in either value OR type.
if (status !== "complete") {  }

// > (Greater Than)
if (cartTotal > 50) {  }

// < (Less Than)
if (stockRemaining < 5) {  }

// >= (Greater Than or Equal To)
if (age >= 18) {  }

// <= (Less Than or Equal To)
if (deliveryDays <= 2) {  }

// && (Logical AND)
if (isWeekend && hasTicket) {  }

// || (Logical OR)
if (paidByCard || paidByPayPal) {  }




// End
// ---------------------------------------------







// These are written to make the if statements above work and not 
// cause errors for the output
// Ignore them.

var status = "";
var cartTotal = "";
var stockRemaining = "";
var age = "";
var deliveryDays = "";
var isWeekend = "";
var hasTicket = "";
var paidByCard = "";
var paidByPayPal = "";
