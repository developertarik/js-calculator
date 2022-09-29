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
let lastNum = "";
let operation = "";
let secondOperation = "";
let currentNum = "";

const analog = document.querySelector(".analog");
const newDisplay = document.querySelector(".newDisplay");
/********************/
/* Event Listerners */
/********************/

Array.prototype.forEach.call(num, (e) => {
    e.addEventListener("click", function (current) {

        lastNum = analog.textContent += e.textContent;
        console.log(lastNum)
    })
})
Array.prototype.forEach.call(operators, (e) => {
    e.addEventListener("click", function (operate) {
        analog.textContent = Number(currentNum)

     currentNum = Number(lastNum) + Number(analog.textContent)

        console.log(currentNum)

   
    //     console.log(number1);
    operation = e.textContent;
    
        console.log(operation);
    })
})
//Events
clearBtn.addEventListener("click",clearClick)

equalBtn.addEventListener("click",equalClick)

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

function operate(operation, lastNum, currentNum) {
    if (operation === "+") {
        total = sum(Number(lastNum), Number(currentNum));
        console.log( total);
    }
    if (operation === "*") {
        total = multiply(Number(lastNum), Number(currentNum));
        console.log(total);
    }
    if (operation === "/") {
        total = divide(Number(lastNum), Number(currentNum));
        console.log( total);
    }
    if (operation === "-") {
        total = subtract(Number(lastNum), Number(currentNum))
        console.log( total);
    }
    else {
        return false;
    }
}

function equalClick(){
    if (operation === "+") {
        analog.textContent = "";
        total = Number(currentNum) + Number(lastNum);

        analog.textContent = Math.round(total);
        console.log(lastNum,operation, currentNum,"=",total)

    }
    if (operation === "*") {
        analog.textContent = "";
        total = Number(currentNum) * Number(lastNum);
        console.log(total);
        analog.textContent = Math.round(total);
        console.log(lastNum,operation, currentNum,"=",total)

    }
    if (operation === "/") {
        analog.textContent = "";

        if (currentNum == 0) {
            alert("Not divide 0 please try again!");
        }
        else {
            total = currentNum / lastNum;
            console.log(total);
            analog.textContent = Math.round(total);
            console.log(lastNum,operation, currentNum,"=",total)

        }
    }
    if (operation === "-") {
        analog.textContent = "";
        total = Number(currentNum) - Number(lastNum);

        analog.textContent = Math.round(total);
        console.log(lastNum,operation, currentNum,"=",total)

    }
    else {
        return false;
    }
}
function clearClick(){
    window.location.reload();
}




operate();