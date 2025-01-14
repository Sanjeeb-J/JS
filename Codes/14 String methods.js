// string methods = allow you to manipulate and work with text (strings)

let userName = "Sanjeeb";

console.log(userName.charAt(0));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);





let userName = "   Sanjeeb J     "

userName = userName.trim();

console.log(userName);
console.log(userName.length)


userName = userName.toUpperCase();
console.log(userName);

userName = userName.toLowerCase();
console.log(userName);

userName = userName.repeat(3);
console.log(userName);





let userName = " Sanjeeb J"

let result = userName.startsWith(" ");

if(result) {
    console.log("Your username can't begin with ' '");
}
else {
    console.log(userName);
}





let userName = "Sanjeeb J "

let result = userName.endsWith(" ");

if(result) {
    console.log("Your username can't end with ' '");
}
else {
    console.log(userName);
}





let userName = "Sanjeeb J"

let result = userName.includes(" ");

if(result) {
    console.log("Your username can't include ' '");
}
else {
    console.log(userName);
}





let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", ",");

console.log(phoneNumber);





let phoneNumber = "9496458756";

phoneNumber = phoneNumber.padStart(13, "+91");

console.log(phoneNumber);





let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber);