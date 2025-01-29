// function declaration = define a reusable block of code
//                        that performs a specific task

function hello(){
    console.log("Hello");
}

// function expressions = a way to define functions as 
//                        values or variables

const hello = function(){
    console.log("Hello!");
}

hello();





// Timed execution by function declaration

function hello(){
    console.log("Hello");
}

setTimeout(hello, 3000);





// Timed execution by function expressions
// Pass entire argument as a function or treated as a value

setTimeout(function(){console.log("Hello")},3000);

/*
    setTimeout(function(){
        console.log("Hello");
    }, 3000);
*/





// Squaring by function Declaration

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}




// Squaring by function expressions

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

console.log(squares);
console.log(cubes);





const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(function(element){
    return element % 2 === 0;
})
const odd = numbers.filter(function(element){
    return element % 2 !== 0;
})

console.log(even);
console.log(odd);





const numbers = [1, 2, 3, 4, 5, 6];
const totalSum = numbers.reduce(function(accumulator, element){
    return accumulator + element;
})

console.log(totalSum);