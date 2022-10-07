
/*
TODO
[x] Add missing semicolons
[x] Add let or const to variable initializations
[x] After adding let/const to variable initializations, uncomment "use strict" below
[ ] Move the event listeners out of the clicked function
*/

"use strict"

/*************/
/* Variables */
/*************/
let total = 0;
let num = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let equalBtn = document.querySelector(".equal");
let clearBtn = document.querySelector(".clear");
let number1 = "";
let operation = "";
let secondOperation = "";
let number2 = "";

const currentNumsc = document.querySelector(".analog");
const previousNumsc = document.querySelector(".newDisplay");
/********************/
/* Event Listerners */
/********************/

Array.prototype.forEach.call(num, (e) => {
    e.addEventListener("click", function (current) {
       handleNum(e.textContent);
    })
})
function handleNum(number){
    number1+= number;
    currentNumsc.textContent = number1;
}
Array.prototype.forEach.call(operators, (e) => {
    e.addEventListener("click", function (operate) {
        operation = e.textContent;
       number2 = number1;
       console.log(number1,number2)
       previousNumsc.textContent = number2+ "" +operation;
       number1 = "";
       currentNumsc.textContent = ""
        console.log(operation);
    })
    
})


// Event listeners will probably only have to be added once,
// add them here

/*************/
/* Functions */
/*************/

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if ((b) == 0) {
        return "no";
    }
    else {
        return a / b;
    }
}
console.log(number2)
function operate(operation, a, b) {
    if (operation === "+") {
        return sum(Number(a), Number(b));
    }
    if (operation === "*") {
        return multiply(Number(a), Number(b));
      
    }
    if (operation === "/") {
        return divide(Number(a), Number(b));
    }
    if (operation === "-") {
        return  subtract(Number(a), Number(b))
        
    }
    else {
        return false;
    }
}
function calc(){
    number1 = Number(number1)
    number2 = Number(number2)
    if (operation === "+") {
       number2+=number1

    }
    if (operation === "*") {
        number2*=number1

    }
    if (operation === "/") {
        analog.textContent = "";

        if (currentNum == 0) {
            alert("Not divide 0 please try again!");
        }
        else {
            total = number1 / number2;
            console.log(total);
            analog.textContent = Math.round(total);
            console.log(number1,operation, number2,"=",total)

        }
    }
    if (operation === "-") {
        number1 = newDisplay.textContent
        number2 = analog.textContent;
        total = Number(number1) - Number(number2);

        analog.textContent = Math.round(total);
        newDisplay.textContent = Math.round(total)
        console.log(number1,operation, number2,"=",total)

    }
    else {
        return false;
    }
}
function equalClick(){
   
}
function clearClick(){
    window.location.reload();
}



//Events
  clearBtn.addEventListener("click",clearClick)

    equalBtn.addEventListener("click",equalClick)
operate();