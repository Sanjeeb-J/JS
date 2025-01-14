// For loop = repeat some code a LIMITED amount of times

for(let i = 0; i<=10; i++) {
    console.log(i);
}

console.log(" ")

for(let i = 0; i<=10; i+=2) {
    console.log(i);
}

console.log(" ")

for(let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("Happy New Year!!!")





for (let i = 1; i <= 20; i++){

    if(i == 13) {
        continue;
    }
    else {
        console.log(i);
    }
}






for (let i = 1; i <= 20; i++){

    if(i == 13) {
        break;
    }
    else {
        console.log(i);
    }
}