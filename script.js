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
//todo koşulları butona tıklama ile çalışacak şekilde değiştir
//click button 
// yapmam gereken sayıya tıklayacağım ve analog değişecek
// bu kadar basit

function clickedButton(newValue) {
    //önce divi doma ekle
    //const calculator = document.getElementsByClassName("calculator")[0];
    const buttons = document.getElementsByClassName("btn")
    console.log(buttons)
    const board = document.querySelector(".board");
    const analog = document.querySelector(".analog");
    const newAnalog = document.createElement("div")
    analog.appendChild(newAnalog)

    let nums = document.querySelector(".num-column");
    let total;
    newValue  = document.createElement("div");
    
    
    //operators
    const sumBtn = document.getElementById("sum")
    //buttons
    

    //events
Array.prototype.forEach.call(buttons,(e)=>{
    e.addEventListener("click",()=> = analog.innerHTML+=e.innerHTML)
 
})
sumBtn.addEventListener("click",()=>console.log(analog.innerHTML))
console.log(newAnalog.innerHTML)

//sum 









    /*
            nums.addEventListener("click",({target})=>{
            
                newValue  = analog.innerHTML =  target.innerText;
                console.log(newValue)

                
          })
        */
/*nums.addEventListener("click",({target})=>{
    let newvValue = analog.innerHTML = target.innerText;
    newvValue += 5
    
    console.log(typeof newvValue)
})
*/
    analog.appendChild(newValue)
    const clear = document.getElementsByClassName("clear")[0]
    clear.addEventListener("click" ,()=>{
            analog.innerHTML = "";
    })
    
   
}

clickedButton();