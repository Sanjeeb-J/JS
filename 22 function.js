// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function HB(username, age){
    console.log(`Happy Birthday to you!`);
    console.log(`Happy Birthday to you!`);
    console.log(`Happy Birthday dear ${username}!`);
    console.log(`Happy Birthday to you!`);
    console.log(`You are ${age} years old`);
}

HB("Sanjeeb", 19);





function add(x, y){
    let result = x + y;
    return result;
}

let ans = add(4, 6);
console.log(ans);

console.log(add(23, 42));





function sub(x, y){
    return x - y;
}

console.log(sub(2313, 421));





function div(x, y){
    return x / y;
}

console.log(div(2313, 421));





function mul(x, y){
    return x * y;
}

console.log(mul(2313, 421));





function isEven(n){
    if(n%2 == 0){
        return true
    }
    else{
        return false
    }
}

console.log(isEven(201));






function isEven(n){
    return n % 2 === 0 ? true : false;
}

console.log(isEven(201));





function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("Sanjeeb@gmail.com"));
console.log(isValidEmail("Pottan.com"));





function isValidEmail(email){

    return email.includes("@") ? true : false;
}

console.log(isValidEmail("Sanjeeb@gmail.com"));
console.log(isValidEmail("Pottan.com"));