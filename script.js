/*
4işlev oluştur ve test et 
1. toplama
2. çıkarma
3. çarpma 
4. bölme */

//1
function sum(a,b) {
    return a+b;
}
//2
function subtract(a,b) {
    return a-b;
}
//3
function multiply(a,b) {
    return a*b;
}
//4
function divide(a,b){
    return a/b;
}
total = 0;
//operate
function operate(operation,num1,num2){
    if(operation ==="add"){
       total = sum(num1,num2);
        return total
    }
    if(operation == "multiply"){
        total= multiply(num1,num2);
        return total
    }
    if(operation=="divide"){
        total = divide(num1,num2);
        return total
    }
    if(operation =="subtract"){
        total = subtract(num1,num2)
        return total 
    }
}
operate();
//todo koşulları butona tıklama ile çalışacak şekilde değiştir
//click button 
// yapmam gereken sayıya tıklayacağım ve analog değişecek
// bu kadar basit
function clickedButton(operate) {
    //önce divi doma ekle
    //const calculator = document.getElementsByClassName("calculator")[0];
    const buttons = document.querySelector(".buttons")
    const board = document.querySelector(".board");
    const analog = document.querySelector(".analog")
    let nums = document.querySelector(".btn")
    let total;
    let newValue  = document.createElement("div");
    
    
    //operators
    const sumBtn = document.getElementsByClassName("sum")
    
    //events
    nums.addEventListener("click",()=>{})
    analog.appendChild(newValue)
    const clear = document.getElementsByClassName("clear")[0]
    clear.addEventListener("click" ,()=>{
            analog.innerHTML = "";
    })
    
    //operators.addEventListener("click"(target)=>{
    
    
}
clickedButton();