// basic function
function sum(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b){
    if((b)==0){
        return "no"
    }
    else{
        return a/b;
    }
}
total = 0;
//operate
function operate(operation,number1,number2){
    if(operation ==="+"){
       total = sum(number1,number2);
        return total
    }
    if(operation === "*"){
        total= multiply(number1,number2);
        console.log( total)
    }
    if(operation==="/"){
        total = divide(number1,number2);
        return total
    }
    if(operation ==="-"){
        total = subtract(number1,number2)
        return total 
    }
    else{
        return false
    }
}
// todo olması gerekenler numara butonları num queryselectorall
// operatorler operators queryselector all
// clear ve eşittir farklı tuşlar yap
let num = document.querySelectorAll(".num")
let operators = document.querySelectorAll(".operator");
let equalBtn = document.querySelector(".equal");
let clearBtn = document.querySelector(".clear")
let number1 = "";
operation="";
let number2 = 0;
function clicked(operate) {
    //önce divi doma ekle
    //const calculator = document.getElementsByClassName("calculator")[0];
    const analog = document.querySelector(".analog");
    const newDisplay = document.createElement("div");
Array.prototype.forEach.call(num,(e)=>{
    e.addEventListener("click",function(current){ 
    number2 = current = analog.textContent+=e.textContent
    })
})
Array.prototype.forEach.call(operators,(e)=>{
    e.addEventListener("click",function(){
    number1 = analog.textContent
    Number(number1)
    operation = e.textContent
    console.log(number1)
    analog.textContent =""
    console.log(typeof operation)
    
        
    })
})
clearBtn.addEventListener("click",()=>analog.innerHTML="")

equalBtn.addEventListener("click",()=>{
    if(operation ==="+"){
        total = number1+number2;
         console.log( total)
         analog.textContent = total;
     }
     if(operation === "*" ){
         total= number1*number2;
         console.log( total)
         analog.textContent = total;
     }
     if(operation==="/"){
         total = number1/number2;
         console.log( total)
         analog.textContent = total;
     }
     if(operation ==="-"){
         total = number1-number2;
         console.log(total) 
         analog.textContent = total;
     }
     else{
         return false
     }
    
})
}


operate()
clicked(operate);