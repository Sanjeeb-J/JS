// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

const number = [1, 2, 3, 4, 5];
const squares = number.map(square);
const cubes = number.map(cube);

console.log(squares);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}





// By using forEach()
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

students.forEach(upperCase);
students.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}
function display(element){
    console.log(element);
}





const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsUpper);
console.log(studentsLower)

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}





const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}