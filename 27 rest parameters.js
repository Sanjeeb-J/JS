// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments ay bundling them into an array

//                    spread = expands an array into separate elements
//                    rest = bundles separate elements into an array

// rest parameters used in function

function openFridge(...foods){
    console.log(foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);





function openFridge(...foods){
    console.log(...foods);
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);





function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);





function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`);





function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(75, 100, 82, 92);

console.log(total);





// combine bunch of strings

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);