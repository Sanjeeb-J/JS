// string slicing = creating a substring
//                  from a portion of another string

//                  string. slice(start, end)

const fullName = "Sanjeeb J";

let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(8);

console.log(firstName);
console.log(lastName);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstChar);
console.log(lastChar);





// string slicing = creating a substring
//                  from a portion of another string

//                  string. slice(start, end)

const fullName = "Sanjeeb J";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);





const email = "donjovana@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);