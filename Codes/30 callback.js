// call back = a function that is passed as an argument to another function

//             used to handle asynchronous operations:
//             1. Reading a file
//             2. Network requests
//             3. Interacting with databases

//             "Hay, when you're done, call this next."






// Wait for 3 seconds

hello();

function hello(){
    setTimeout(function() {
        console.log("Hello!");
    }, 3000);
}





hello(goodbye);
hello(wait);
hello(leave);

function hello(callback){
    console.log("Hello!");
    callback();
}

function wait(){
    console.log("Wait!");
}

function leave(){
    console.log("Leave!");
}

function goodbye(){
    console.log("Goodbye!");
}





sum(displayConsole, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result)
}





/* 
    <h1 id="myH1"></h1>
*/

sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}





