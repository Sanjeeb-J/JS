// Switch = ca be efficient replacement to many else if statements

let day = 1;

switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}





let textScore = 80;
let letterGrade;

switch(true) {
    case textScore >= 90:
        letterGrade = "A";
        break
    case textScore >= 80:
        letterGrade = "B";
        break
    case textScore >= 70:
        letterGrade = "C";
        break
    case textScore >= 60:
        letterGrade = "D";
        break
    default:
        letterGrade = "F";
}

console.log(letterGrade);