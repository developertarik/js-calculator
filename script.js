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
       total = sum(Number(number1),Number(number2));
        return total
    }
    if(operation === "*"){
        total= multiply(Number(number1),Number(number2));
        console.log( total)
    }
    if(operation==="/"){
        total = divide(Number(number1),Number(number2));
        return total
    }
    if(operation ==="-"){
        total = subtract(Number(number1),Number(number2))
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
secondOperation = "";
let number2 = 0;
function clicked(operate) {
    //önce divi doma ekle
    //const calculator = document.getElementsByClassName("calculator")[0];
    const analog = document.querySelector(".analog");
    const newDisplay = document.createElement("div");
Array.prototype.forEach.call(num,(e)=>{
    e.addEventListener("click",function(current){ 
    number1 = analog.textContent+=e.textContent
    })
})
Array.prototype.forEach.call(operators,(e)=>{
    e.addEventListener("click",function(){
    number2 = analog.textContent
    
    Number(number1)
    console.log(number1)
    Number(number2)
    operation = e.textContent
    analog.textContent =""
        
    console.log( operation)
    secondOperation =e.textContent
    console.log(number2)
  
    })
})

clearBtn.addEventListener("click",()=>window.location.reload())

equalBtn.addEventListener("click",()=>{
    if(operation ==="+"){
        analog.textContent =""
        total = Number(number1)+Number(number2);
         
         analog.textContent = Math.round(total);
     }
     if(operation === "*" ){
        analog.textContent =""
         total= Number(number1)*Number(number2);
         console.log( total)
         analog.textContent = Math.round(total);
     }
     if(operation==="/"){
        analog.textContent =""

        if( number2==0){
            alert("Not divide 0 please try again!")
        }
        else{
         total = number1/number2;
         console.log( total)
         analog.textContent = Math.round(total);
        }
        }
     if(operation ==="-"){
         total = number1-number2;
         console.log(total) 
         analog.textContent = Math.round(total);
     }
     else{
         return false
     }
    
})
}


operate()
clicked(operate);