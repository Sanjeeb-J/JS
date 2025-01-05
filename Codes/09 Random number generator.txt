// Random number generator

const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;

console. log(randomNum);




// Random number generator

    <button id="myButton">Roll</button><br>
    <label id="myLabel"></label>
    <script src="script.js"></script>


body {
    font-family: Verdana;
    text-align: center;
}
#myButton {
    font-size: 3em;
    padding: 5px 25px;
    border-radius: 5px;
}
#myLabel {
    font-size: 3em;
}


const myButton = document.getElementById('myButton');
const myLabel = document.getElementById('myLabel');
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function() {
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
}




// Random number generator

    <button id="myButton">Roll</button><br>&nbsp;&nbsp;&nbsp;
    <label id="label1" class="myLabels"></label>&nbsp;&nbsp;&nbsp;
    <label id="label2" class="myLabels"></label>&nbsp;&nbsp;&nbsp;
    <label id="label3" class="myLabels"></label>&nbsp;&nbsp;&nbsp;
    <script src="script.js"></script>


body {
    font-family: Verdana;
    text-align: center;
}
#myButton {
    font-size: 3em;
    padding: 5px 25px;
    border-radius: 5px;
}
.myLabels {
    font-size: 3em;
    font-family: helvetica;
}


const myButton = document.getElementById('myButton');
const myLabel1 = document.getElementById('label1');
const myLabel2 = document.getElementById('label2');
const myLabel3 = document.getElementById('label3');
const min = 1;
const max = 6;
let rn1;
let rn2;
let rn3;

myButton.onclick = function() {
    rn1 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = rn1;

    rn2 = Math.floor(Math.random() * max) + min;
    myLabel2.textContent = rn2;
    
    rn3 = Math.floor(Math.random() * max) + min;
    myLabel3.textContent = rn3;
}