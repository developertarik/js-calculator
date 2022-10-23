

"use strict"

/*************/
/* Variables */
/*************/
let total = "";
let number1 = "";
let operation = "";
let number2 = "";
/*DOM Selectors*/
const num = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");


//const
const analog = document.querySelector(".analog");
/********************/
/* Event Listerners */
/********************/

Array.prototype.forEach.call(num, (e) => {
    e.addEventListener("click", function (current) {
        if(operation ==""){
        number1 = analog.textContent += e.textContent
        console.log(number1)
    }
      
        else{
            analog.textContent = "";
            number2 = analog.textContent += e.textContent;
            console.log(number1,number2);

        }


    })
})
Array.prototype.forEach.call(operators, (e) => {
    e.addEventListener("click", function (operate) {
        analog.textContent = "";
        console.log(number1,number2)
        if(operation=="")
        operation = e.textContent;
       
    
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
    if(operation ==="+" && number2 !=""){
        analog.textContent  = "";
       console.log( number1 = Number(number1) + Number(number2));
       total = number1 
      analog.textContent = total;
       number2 = "";    
       operation = "";
        
    }

   
 
    if(operation ==="*" && number2 !=""){
        analog.textContent  = "";
       console.log( number1 = Number(number1) * Number(number2));
       total = number1 
      analog.textContent = total;
       number2 = "";    
       operation = "";
        
    }
    if(operation ==="-" && number2 !=""){
        analog.textContent  = "";
       console.log( number1 = Number(number1) - Number(number2));
       total = number1 
      analog.textContent = total;
       number2 = "";    
       operation = "";
        
    }
    if(operation ==="/" && number2 !=""){
        analog.textContent  = "";
       console.log( number1 = Number(number1) / Number(number2));
       total = number1 
      analog.textContent = total;
       number2 = "";    
       operation = "";
        
    }

    // if(operation==="+" && number2 ===""){
    //     analog.textContent;
    //     total = number1
    //     number1 = Number(number1) + Number(number1)
    //     analog.textContent = number1;
    // }
   
  
    // if(operation==="-" && number2 ===""){
    //     analog.textContent;
    //     total = number1
    //     number1 = Number(number1) - Number(number1)
    // }
    
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