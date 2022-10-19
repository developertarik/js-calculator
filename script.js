

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
let number2 = "";
let secondOperation = "";
//const
const analog = document.querySelector(".analog");
const newDisplay = document.querySelector(".newDisplay");
/********************/
/* Event Listerners */
/********************/

Array.prototype.forEach.call(num, (e) => {
    e.addEventListener("click", function (current) {
        if(operation ==""){
        number1 = analog.textContent += e.textContent
        console.log(number1)}
        else{
            number2 = analog.textContent += e.textContent;
            console.log(number1,number2);
        }
    })
})
Array.prototype.forEach.call(operators, (e) => {
    e.addEventListener("click", function (operate) {
        console.log(number1,number2)
        newDisplay.textContent = number1;
        analog.textContent = ""
       if(operation==""){
        operation = e.textContent;
       }
       else{
        secondOperation = e.textContent;
        console.log(secondOperation)
       }
        
       
        calc()
    })
    
})
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
function calc(){
    if(operation ==="+"&& number2 !=""){
        analog.textContent  = "";
        number2 =Number(number1)+Number(number2);
        console.log(total);

        total = number2;
        analog.textContent = total;
        newDisplay.textContent = "";
        newDisplay.textContent = total;
        analog.textContent = ""
        number1 = "";
        operation ="";
        
    }
    if(operation==="*"&& number2 !=""){
        analog.textContent  = "";
        number2 =Number(number1)+Number(number2);
        console.log(total);

        total = number2;
        analog.textContent = total;
        newDisplay.textContent = "";
        newDisplay.textContent = total;
        analog.textContent = ""
        operation ="";

    }
    if(operation==="-"&& number2 !="" ){
        analog.textContent  = "";
        number2 =Number(number1)-Number(number2);
        total = number2;
        console.log(total);
       
        analog.textContent = total;
        newDisplay.textContent = "";
        newDisplay.textContent = total;
        analog.textContent = ""
        operation ="";
        

    }
    
}
function clearClick(){
    number1 = "";
    number2 = "";
    total = "";
    operation = "";
    analog.textContent ="";
    newDisplay.textContent = "";
}
function equalClick(){
    analog.textContent = total;
}
//Events
  clearBtn.addEventListener("click",clearClick)

    equalBtn.addEventListener("click",calc)
operate();
