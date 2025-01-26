console.log(`Hello`);
console.log(`I like you`);

window.alert(`This is an alert`);
window.alert(`I like pizza`);

/*
    put this in html body

    <h1 id="myH1"></h1>
    <p id="myP"></p>

*/
document.getElementById(`myH1`).textContent = `Hello`;
document.getElementById(`myP`).textContent = `I like Pizza`;

// comment

/*
    multiline comment
*/





//declaration
let x;
//assignment
x = 100;

//both same time
let y = 33;

console.log(x);
console.log(y);





//Numbers
let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);





//Strings
let firstName = "Sanjeeb";
let favFood = "Pizza";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favFood}`);






//Booleans
let online = false;

console.log(`Bro is online: ${online}`);





/*
    <p id="p1"></p>
    <p id="p2"></p>
    <p id="p3"></p>
*/

let fullName = "Sanjeeb J";
let age = 19;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = `Are you student: ${student}`;





let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extrastudents = = students % 3;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;

//students ++;
//students --;

console.log(students) ;





/* 
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulus
    4. addition & subtraction
*/

//let result = 1 + 2 * 3 + 4 ** 2;
//let result = 12 % 5 + 8 / 2;
//let result = 6 / 2 ** (2 + 5);

console.log(result);





// How to accept user input
// 1. EASY WAY = window prompt

let username;

username = window.prompt("what's your username?");

// let username = window.prompt("what's your username?");

console.log(username);





// How to accept user input
// 2. PROFESSIONAL WAY = HTML textbox

/*
    <h1 id="myH1">Welcome</h1>

    <label>username: </label>
    <input id="myText"><br><br>
    <button id="myButton">Submit</button>
*/

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}





// How to accept user input
// 2. PROFESSIONAL WAY = HTML textbox

/*
    <h1 id="myH1">Welcome</h1>

    <label>username: </label>
    <input id="myText"><br><br>
    <button id="myButton">Submit</button>
*/

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
}





// type conversion

let age = window.prompt("How old are you?");

age += 1;

console.log(age, typeof age);





// type conversion

let age = window.prompt("How old are you?");
age = Number(age);
age += 1;

console.log(age, typeof age);





// type conversion

let x = "Pizza";
let y = "Pizza";
let z = "Pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);





// type conversion

let x = "0";
let y = "0";
let z = "0";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);





// type conversion

let x = "";
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);





// type conversion

let x;
let y;
let z;

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);





// const = a variable that can't be changed

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);

circumference = 2 * pi * radius;
console.log(circumference)





// const = a variable that can't be changed

/*
    <h1 id="myH1">Enter the radius of a circle: </h1>
    <label>Radius</label>
    <input type="text" id="myText"><br><br>
    <button id="mySubmit">Submit</button>
    <h3 id="myH3"></h3>
*/

const pi = 3.14159;
let radius;
let circumference;

document.getElementById('mySubmit').onclick = function() {
    radius = document.getElementById('myText').value;
    radius = Number(radius)
    circumference = 2 * pi * radius;
    document.getElementById('myH3').textContent = `The circumference of circle ${circumference} cm`;
}