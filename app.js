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
const addition = document.querySelector("#plus");
const subtract = document.querySelector("#minus");
const nthPower = document.querySelector("#nthPower");
const squared = document.querySelector("#squared");
const display = document.getElementById("display");
const displayStorage = {textContent: ""};
const operator = {textContent: ""};

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
        displayStorage.textContent = display.textContent;
        display.textContent = "0";
    }
    

function operatorDivision () {
    if (operator.textContent != "") {
        performMath();
    }
    operatorPressed();
    operator.textContent = "division";
}
function operatorMultiply () {
    if (operator.textContent != "") {
        performMath();
    }
    operatorPressed();
    operator.textContent = "multiply";
}
function operatorAddition () {
    if (operator.textContent != "") {
        performMath();
    }
    operatorPressed()
    operator.textContent = "addition";
}
function operatorSubtraction () {
    if (operator.textContent != "") {
        performMath();
    }
    operatorPressed()
    operator.textContent = "subtraction";
}
function operatorNth () {
    if (operator.textContent != "") {
        performMath();
    }
    operatorPressed();
    operator.textContent = "Nth";
}

function performMath () {
    let result;
    if (operator.textContent = "multiply") {
        let first = parseInt(displayStorage.textContent);
        let second = parseInt(display.textContent);
            result = (first) * (second);
        }
    if (operator.textContent = "division") {
            result = (displayStorage.textContent / display.textContent);
        }
    if (operator.textContent = "addition") {
            result = (displayStorage.textContent + display.textContent);
        }
    if (operator.textContent = "subtraction") {
            result = (displayStorage.textContent - display.textContent);
        }
    if (operator.textContent = "Nth") {
            result = (displayStorage.textContent ^ display.textContent);
        }
    display.textContent = result;
    operator.textContent = "";
    displayStorage.textContent = "";
}

function reset() {
    operator.textContent = "";
    display.textContent = "0";
    displayStorage.textContent = "";
}
function displayClear() {
    display.textContent = "0";
}
function sq() {
    let result = display.textContent*display.textContent;
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
button0.addEventListener("click", pressed);
equals.addEventListener("click", performMath);
allClear.addEventListener("click", reset);
clear.addEventListener("click", displayClear);
divide.addEventListener("click", operatorDivision);
multiply.addEventListener("click", operatorMultiply);
addition.addEventListener("click", operatorAddition);
subtract.addEventListener("click", operatorSubtraction);    
nthPower.addEventListener("click", operatorNth);
squared.addEventListener("click", sq);