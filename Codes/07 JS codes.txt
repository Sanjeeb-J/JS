// Counter Program

    <label id="countLabel">0</label>
    <div id="btnContainer">
        <button id="decreaseBtn" class="buttons">Decrease</button>
        <button id="resetBtn" class="buttons">Reset</button>
        <button id="increaseBtn" class="buttons">Increase</button>
    </div>





#countLabel {
    display: block;
    text-align: center;
    font-size: 10em;
    font-family: Helvetica;
}
#btnContainer {
    text-align: center;
}
.buttons {
    padding: 10px 20px;
    font-size: 1.5em;
    color: white;
    background-color: rgb(62, 188, 247);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.15s;
}
.buttons:hover {
    background-color: blue;
    padding: 12px 22px;
}





// Counter Program

const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}