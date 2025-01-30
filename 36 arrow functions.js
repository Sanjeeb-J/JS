// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code

// Function
function hello(){
    console.log("Hello");
}

hello();





// Function Expression
const hello = function(){
    console.log("Hello!");
}

hello();





// by using arrow function
const hello = () => console.log("Hello");

hello();





// Pass an argument
const hello = (name) => console.log(`Hello ${name}`);

hello("Sanjeeb J");





// Add more line of codes
const hello = (name, age) => {console.log(`Hello ${name}`);
                         console.log(`You are ${age} years old`);
                        }

hello("Sanjeeb J", 19);





// Function
setTimeout(hello, 3000);

function hello(){
    console.log("Hello");
}





// Function expression
setTimeout(function(){
    console.log("Hello");
}, 3000);





// By arrow function
setTimeout(() => console.log("Hello")
, 3000);





// arrow function for map, filter and reduce
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 == 0 );
const oddNums = numbers.filter((element) => element % 2 != 0 );
const total = numbers.reduce((a, element) => a + element);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);