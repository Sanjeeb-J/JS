/*
ternary operator = a shortcut to if{} and else{} statements
                   helps to assign a variable based on a condition
                   condition ? codelfTrue : codelfFa1se;
*/

let age = 21;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);





let time = 9;
let greeting = time < 12 ? "Good morning!" : "Good afternoon";
console.log(greeting);





let isStudent = true;
let message = isStudent ? "You are a student" : "You are Not a student";
console.log(message);





let purchaseAmount = 200;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);