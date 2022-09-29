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

/********************/
/* Event Listerners */
/********************/

// Event listeners will probably only have to be added once,
// add them here

/*************/
/* Functions */
/*************/

// basic function
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

//operate
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
// todo olması gerekenler numara butonları num queryselectorall
// operatorler operators queryselector all
// clear ve eşittir farklı tuşlar yap
const analog = document.querySelector(".analog");
const newDisplay = document.querySelector(".newDisplay");
// Parameter operate is being passed in here as a callback function but is never used

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
        if(operation ==="+"){
            currentNum = Number(lastNum) + Number(analog.textContent)
            total = currentNum
            console.log(total)
            analog.textContent = ""

        analog.textContent = Number(currentNum)
        }
        if(operation==="-"){
            currentNum = Number(lastNum) - Number(analog.textContent)
            total = currentNum
           
                Math.abs(total)

            
            console.log(total)
            analog.textContent = total

        }
        if(operation ==="/"){
            currentNum = Number(lastNum) / Number(analog.textContent)

        }
        if(operation==="*"){
            currentNum = Number(lastNum) * Number(analog.textContent)

        }
   
    //     console.log(number1);
    operation = e.textContent;
    
        console.log(operation);
    })
})

  clearBtn.addEventListener("click", () => window.location.reload())

    equalBtn.addEventListener("click", () => {
        if (operation === "+") {
            analog.textContent = "";
            total = Number(currentNum) + Number(lastNum);

            analog.textContent = Math.round(total);
        }
        if (operation === "*") {
            analog.textContent = "";
            total = Number(currentNum) * Number(lastNum);
            console.log(total);
            analog.textContent = Math.round(total);
        }
        if (operation === "/") {
            analog.textContent = "";

            if (number2 == 0) {
                alert("Not divide 0 please try again!");
            }
            else {
                total = number1 / number2;
                console.log(total);
                analog.textContent = Math.round(total);
            }
        }
        if (operation === "-") {
            analog.textContent = "";
            total = Number(currentNum) - Number(lastNum);

            analog.textContent = Math.round(total);
        }
        else {
            return false;
        }

    })
// The following is getting called but it's not doing anything (returns false here)
//operate()
operate();/*
Hesap makinesinin çalışmasını sağlayın! Bir kullanıcı bir operatöre bastığında hesap makinesine girilen ilk sayıyı kaydetmeniz ve ayrıca hangi işlemin seçildiğini kaydetmeniz ve ardından operate()kullanıcı “=” tuşuna bastığında bu numaralara kaydetmeniz gerekecektir.
Ekranı doldurabilecek koda zaten sahip olmalısınız, bu nedenle bir kez operate()çağrıldığında, ekranı işleme 'çözüm' ile güncelleyin.
Bu projenin en zor kısmı. Tüm değerleri nasıl saklayacağınızı bulmanız ve onlarla birlikte çalıştırma işlevini çağırmanız gerekir. Mantığını anlamanız biraz zaman alıyorsa kendinizi kötü hissetmeyin.
Gotchas: Kodunuzda görünürlerse bu hatalara dikkat edin ve düzeltin:
Kullanıcılar, birkaç işlemi bir araya getirebilmeli ve her bir sayı çifti aynı anda değerlendirilerek doğru yanıtı alabilmelidir. Örneğin, 12 + 7 - 5 * 3 =vermelidir 42. Aradığımız davranışa bir örnek, bu öğrenci çözümü olabilir .
Hesap makineniz aynı anda birden fazla sayıyı değerlendirmemelidir. Örnek: bir sayı düğmesine ( 12), ardından bir operatör düğmesine ( +), ikinci bir sayı düğmesine ( 7) ve son olarak ikinci bir operatör düğmesine ( -) basarsınız. Ardından hesap makineniz şunları yapmalıdır: önce ilk sayı çiftini değerlendirin ( 12 + 7), ikinci olarak bu hesaplamanın sonucunu görüntüleyin ( 19) ve son olarak bu sonucu ( 19) yeni hesaplamanızda sonraki operatör ( -).
Cevapları ekranı taşmaması için uzun ondalık sayılarla yuvarlamalısınız.
=Tüm numaraları veya bir operatörü girmeden önce tuşuna basmak sorunlara neden olabilir!
"Temizle"ye basmak mevcut tüm verileri silmelidir.. kullanıcının "temizle"ye bastıktan sonra gerçekten yeni başladığından emin olun.
Kullanıcı 0'a bölmeye çalışırsa keskin bir hata mesajı görüntüleyin ve bunun hesap makinenizi çarpmasına izin vermeyin!/** */