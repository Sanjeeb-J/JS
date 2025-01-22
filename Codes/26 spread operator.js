// spread operator = ... allows an iterable such as an
//                       array or string to be expanded
//                       into separate elements
//                       (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);





let username = "Sanjeeb J";
let letters = [...username].join("-");

console.log(letters);





let username = "Sanjeeb J";
let letters = [...username];
letters.sort();

console.log(letters);





// copy an array
let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits];

console.log(newFruits);





// Add two array, append
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);