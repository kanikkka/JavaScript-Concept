// create a faulty calcultor
// it take two number from user 
// addition place perform minus
// subsraction place addiiton
// *->/
// only perform wrong operation 10%
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let op = prompt("Enter operation (+, -, *, /):");

// Generate random number
let random = Math.random();

let result;

if(random < 0.1) {
    // 10% chance → wrong calculation
    console.log("Faulty Calculator Activated 😈");

    if(op === "+") result = num1 - num2;
    else if(op === "-") result = num1 / num2;
    else if(op === "*") result = num1 + num2;
    else if(op === "/") result = num1 ** num2;
} else {
    // Normal calculation
    if(op === "+") result = num1 + num2;
    else if(op === "-") result = num1 - num2;
    else if(op === "*") result = num1 * num2;
    else if(op === "/") result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
}

console.log("Result:", result);