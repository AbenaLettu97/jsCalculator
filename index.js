// let number = document.getElementsByClassName("number"); 

let trailingResult = 0;
let operationOptions = ['divide', 'multiply', 'subtract', 'decimal']
let workingOperation = "";

function updateDisplay(button){
    let display = document.getElementById("display");

    if (display.innerHTML === "0" && operationOptions.indexOf(button) === -1){
        display.innerHTML = button;
        }
        else if(operationOptions.indexOf(button) >= 0 ){
            workingOperation = button;
            trailingResult = display.innerHTML;
            display.innerHTML = 0; 
        }
        else if(button === "equals"){
         display.innerHTML = calculate(parseFloat(trailingResult), parseFloat(display.innerHTML), workingOperation);
         trailingResult = display.innerHTML;
        }
        else{
    display.innerHTML += button;
    }
}
function calculate(firstNumber, secondNumber, operation){
  let result;
    switch(operation){
        case "add":
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "divide":
            result = firstNumber / secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
       default:
        result =  f;
    }
    return result.toString();
}

function clearDisplay(){
    let display = document.getElementById("display");
    display.innerHTML = 0;
}

function deleteDisplay(){
    let display = document.getElementById("display");
    display.innerHTML = display.innerHTML.slice(0, -1);
}

// let displayValue = "0";
// let previousValue = null;
// let currentOperation = null;
// let shouldResetDisplay = false;
// const operationOptions = ['divide', 'multiply', 'subtract', 'add'];

// function updateDisplay(button) {
//     let display = document.getElementById("display");

//     if (!isNaN(button) || button === ".") {
//         // Handle numbers and decimal point
//         if (displayValue === "0" || shouldResetDisplay) {
//             displayValue = button;
//             shouldResetDisplay = false;
//         } else {
//             displayValue += button;
//         }
//         display.innerHTML = displayValue;
//     } else if (operationOptions.indexOf(button) >= 0) {
//         // Handle operation buttons
//         if (currentOperation && previousValue !== null && !shouldResetDisplay) {
//             // Calculate the result of the previous operation
//             displayValue = calculate(previousValue, parseFloat(displayValue), currentOperation);
//             display.innerHTML = displayValue;
//         }
//         currentOperation = button;
//         previousValue = parseFloat(displayValue);
//         shouldResetDisplay = true;
//     } else if (button === "equals") {
//         // Handle equals button
//         if (currentOperation && previousValue !== null) {
//             displayValue = calculate(previousValue, parseFloat(display.innerHTML), currentOperation);
//             display.innerHTML = displayValue;
//             previousValue = null;
//             currentOperation = null;
//         }
//     }
// }

// function calculate(firstNumber, secondNumber, operation) {
//     let result;
//     switch (operation) {
//         case "add":
//             result = firstNumber + secondNumber;
//             break;
//         case "subtract":
//             result = firstNumber - secondNumber;
//             break;
//         case "divide":
//             result = firstNumber / secondNumber;
//             break;
//         case "multiply":
//             result = firstNumber * secondNumber;
//             break;
//         default:
//             result = secondNumber;
//     }
//     return result.toString();
// }

// function clearDisplay() {
//     displayValue = "0";
//     previousValue = null;
//     currentOperation = null;
//     shouldResetDisplay = false;
//     document.getElementById("display").innerHTML = displayValue;
// }

// function deleteDisplay() {
//     let display = document.getElementById("display");
//     displayValue = displayValue.slice(0, -1) || "0";
//     display.innerHTML = displayValue;
// }
