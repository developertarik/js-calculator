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
    return a/b;
}
total = 0;
//operate
function operate(operation,a,b){
    if(operation ==="add"){
       total = sum(a,b);
        return total
    }
    if(operation == "multiply"){
        total= multiply(a,b);
        return total
    }
    if(operation=="divide"){
        total = divide(a,b);
        return total
    }
    if(operation =="subtract"){
        total = subtract(a,b)
        return total 
    }
    else{
        return false
    }
}
operate();
// todo olması gerekenler numara butonları num queryselectorall
// operatorler operators queryselector all
// clear ve eşittir farklı tuşlar yap
let num = document.querySelectorAll(".num")
let operators = document.querySelectorAll(".operator");
let equalBtn = document.querySelector(".equal");
let clearBtn = document.querySelector(".clear")
let value = 0;
function clicked() {
    //önce divi doma ekle
    //const calculator = document.getElementsByClassName("calculator")[0];
    const analog = document.querySelector(".analog");
Array.prototype.forEach.call(num,(e)=>{
    e.addEventListener("click",function(current){ 
     current = analog.innerHTML+=e.innerHTML

    })
})

}

clicked();