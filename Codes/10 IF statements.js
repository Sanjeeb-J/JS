// IF statements

let age = 25;

if(age >= 18) {
    console.log("You are old enough to enter this site");
}
else {
    console.log("You must be 18+ to enter this site");
}





let isStudent = true;

if(isStudent) {
    console.log("You are a student!");
}
else {
    console.log("You are Not a student!");
}





let age = 25;
let hasLicense = true;

if(age >= 16) {
    console.log("You are old enough to drive");

    if(hasLicense) {
        console.log("You have License");
    }
    else {
        console.log("You don't have License");
    }
}
else {
    console.log("You must be 18+ to have a license");
}





/*
    <label>Enter Your Age:</label>
    <input type="text" id="myText">
    <button type="submit" id="mySubmit">Submit</button>
    <p id="resultElement"></p>
*/


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function() {

    age = myText.value;
    age = Number(age);

    if(age >= 100) {
        resultElement.textContent = "You are Too old enough to enter this site";
    }
    else if(age >= 18) {
        resultElement.textContent = "You are old enough to enter this site";
    }
    else if(age == 0) {
        resultElement.textContent = "You can't enter. You were just born";
    }
    else if(age < 0) {
        resultElement.textContent = "Your age can't be below 0";
    }
    else {
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}