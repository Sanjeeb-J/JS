// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

console.log(fruits);

fruits[0] = "coconut";

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);





// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

// Add an element at the end
fruits.push("coconut");
console.log(fruits);

// Remove an element at the end
fruits.pop();
console.log(fruits);

// Add element to the beginning
fruits.unshift("mango");
console.log(fruits);

// remove an element from the beginning
fruits.shift();
console.log(fruits);

// Length of an array
let numOfFruits = fruits.length;
console.log(numOfFruits);

// Locate the index
let index = fruits.indexOf("banana");
console.log(index);
// if index is -1 that means the element does not exist

// loop through each element in an array
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// loop through each element in an array in reverse order
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

// sort an array
fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}