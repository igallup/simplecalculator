const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const button0 = document.querySelector("#zero");
const allClear = document.querySelector("#allClear");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#times");
const add = document.querySelector("#plus");
const subtract = document.querySelector("#minus");
const nthPower = document.querySelector("#nthPower");
const squared = document.querySelector("#squared");
const display = document.getElementById("display");
const displayStorage = "";
const operator = "";
const result = "";

function pressed () {
    let button = this.textContent;
        if (display.textContent == "0") {
            display.textContent = button;
            }
        else {
            let str = display.textContent;
            str += button;
            display.textContent = str;
        }
       
    }
    
function operatorPressed () {
    const displayStorage = display.textContent;
    display.textContent = "0";
    const operator = this.textContent;
    }    

    // Currently hung up here, trying to figure out how to pass the operator's symbol in to perform the required equation...
function performMath () {
    const result = displayStorage ${operator} display;
    display.textContent = result;
}


button1.addEventListener("click", pressed);
button2.addEventListener("click", pressed);
button3.addEventListener("click", pressed);
button4.addEventListener("click", pressed);
button5.addEventListener("click", pressed);
button6.addEventListener("click", pressed);
button7.addEventListener("click", pressed);
button8.addEventListener("click", pressed);
button9.addEventListener("click", pressed);

equals.addEventListener("click", performMath);