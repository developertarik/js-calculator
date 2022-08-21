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

//operate
function operate(operation,num1,num2){
    if(operation ==="add"){
        return sum(num1,num2);
    }
    if(operation == "multiply"){
        return multiply(num1,num2);
    }
    if(operation=="divide"){
        return divide(num1,num2);
    }
    if(operation =="subtract"){
        return subtract(num1,num2)
    }
}
operate();
//todo koşulları butona tıklama ile çalışacak şekilde değiştir
//click button 
function clickedButton() {
    //önce divi doma ekle
    const board = document.querySelector(".board")
    const buttons = document.querySelectorAll("button")
    const analog = document.querySelector(".analog")
    document.appendChild(calculator);
}
clickedButton();