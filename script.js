

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

const analog = document.querySelector(".analog");
const newDisplay = document.querySelector(".newDisplay");
/********************/
/* Event Listerners */
/********************/

Array.prototype.forEach.call(num, (e) => {
    e.addEventListener("click", function (current) {
        number1 = analog.textContent += e.textContent
        console.log(number1)
    })
})
Array.prototype.forEach.call(operators, (e) => {
    e.addEventListener("click", function (operate) {
        operation = e.textContent;

        analog.textContent = total
        number2 = analog.textContent 
        analog.textContent = number2

        if(operation ==="+" && number1 !== "" && number2!==""){
        analog.textContent = "";
        total = Number(number1) + Number(number2);

        newDisplay.textContent = Math.round(total);
        console.log(number1,operation, number2,"=",total)
        }
        
        console.log(Number(number1))
        console.log(Number(number2))


        

   
    //     console.log(number1);
    
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
function operate(operation, number1, number2) {
    if (operation === "+") {
        total = sum(Number(number1), Number(number2));
        console.log( total);
    }
    if (operation === "*") {
        total = multiply(Number(number1), Number(number2));
        console.log(total);
    }
    if (operation === "/") {
        total = divide(Number(number1), Number(number2));
        console.log( total);
    }
    if (operation === "-") {
        total = subtract(Number(number1), Number(number2))
        console.log( total);
    }
    else {
        return false;
    }
}

function equalClick(){
    if (operation === "+") {
        number1 = newDisplay.textContent
        number2 = analog.textContent;
        total = Number(number1) + Number(number2);

        analog.textContent = Math.round(total);
        newDisplay.textContent = Math.round(total)
        console.log(number1,operation, number2,"=",total)

    }
    if (operation === "*") {
        analog.textContent = "";
        total = Number(number1) * Number(number2);
        console.log(total);
        analog.textContent = Math.round(total);
        console.log(number1,operation, number2,"=",total)

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
        analog.textContent = "";
        total = Number(number1) - Number(number2);

        analog.textContent = Math.round(total);
        console.log(number1,operation, number2,"=",total)

    }
    else {
        return false;
    }
}
function clearClick(){
    window.location.reload();
}



//Events
  clearBtn.addEventListener("click",clearClick)

    equalBtn.addEventListener("click",equalClick)
operate();