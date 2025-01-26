// froEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided

let number = [1, 2, 3, 4, 5];

number.forEach(display);

function display(element){
    console.log(element);
}





let number = [1, 2, 3, 4, 5];

number.forEach(double);

function double(element){
    console.log(element*2)
}






let number = [1, 2, 3, 4, 5];

number.forEach(double);
number.forEach(display);

function double(element, index, array){
    array[index] = element * 2
}

function display(element){
    console.log(element);
}





let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element);
}





let fruits = ["APPLE", "ORANGE", "BANANA", "COCONUT"];

fruits.forEach(lowerCase);
fruits.forEach(display);

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function display(element){
    console.log(element);
}





let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}