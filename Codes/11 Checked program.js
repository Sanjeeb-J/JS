// .checked = property that determines the checked state of an
//            HTML checkbox or radio button element


    <input type="checkbox" id="myCheckBox">
    <label for="myCheckBox">Subscribe</label><br><br>

    <input type="radio" name="card" id="visaBtn">
    <label for="visaBtn">Visa</label><br>
    <input type="radio" name="card" id="masterCardBtn">
    <label for="masterCardBtn">MasterCard</label><br>
    <input type="radio" name="card" id="payPalBtn">
    <label for="payPalBtn">PayPal</label><br><br>

    <button type="submit" id="mySubmit">Submit</button>

    <p id="subResult"></p>
    <p id="paymentResult"></p>



body {
    font-family: Verdana;
    font-size: 2em;
}
#mySubmit {
    font-size: 1em;
}



const myCheckBox = document.getElementById(`myCheckBox`);
const visaBtn = document.getElementById(`visaBtn`);
const masterCardBtn = document.getElementById(`masterCardBtn`);
const payPalBtn = document.getElementById(`payPalBtn`);
const mySubmit = document.getElementById(`mySubmit`);
const subResult = document.getElementById(`subResult`);
const paymentResult = document.getElementById(`paymentResult`);

mySubmit.onclick = function() {
    
    if (myCheckBox.checked) {
        subResult.textContent = `You are Subscribed`;
    }
    else {
        subResult.textContent = `Please Subscribe our channel`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentResult.textContent = `You must select a payment type`;
    }
}