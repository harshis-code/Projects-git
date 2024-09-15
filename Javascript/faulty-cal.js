document.title= "Faulty Calculator";
document.body.style.background= "grey";
/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
// Input Numbers
let a = Number(prompt("Enter First Number"));
let b = Number(prompt("Enter Second Number"));
// Random Number
let random= Math.random();
let addition = a+b ;
let Subtraction = a-b;
let Multiplication =a*b;
let Division= a/b;
let Exponentiation = a**b;
//
console.log(random)
// Condition
if (random <0.1){
    console.log("Addition Calculation : " , Subtraction) ;
    console.log("Subtraction Calculation : " , Division) ;
    console.log("Multiplication Calculation : " , addition);
    console.log("Division Calculation : " ,Exponentiation ) ;
}

else{ 
    console.log("Addition Calculation : " , addition) ;
    console.log("Subtraction Calculation : " , Subtraction) ;
    console.log("Multiplication Calculation : " , Multiplication );
    console.log("Division Calculation : " , Division ) ;
}
//Second Way
// let random = Math.random()
// console.log(random)
// let a = prompt("Enter first number")
// let c = prompt("Enter operation")
// let b = prompt("Enter second number")

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }



// if (random > 0.1) {
//     // Perform correct calculation
//     console.log(`The result is ${a} ${c} ${b}`)
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
// }

// else {
//     // Perform wrong calculation
//     c = obj[c]
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

// }