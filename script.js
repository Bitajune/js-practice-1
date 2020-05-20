/*****************************
Variables and data types
*/

// let firstName = 'Bita';
// console.log(firstName);

// let lastName = 'De La Rosa';
// let age = 29;
// console.log(lastName, age);

// let fullAge = true;
// let job = 'Teacher';
// console.log(fullAge, job);

/*****************************
Variable mutation and type coercion
*/

let firstName = 'Bita';
let age = 29;

//Type coercion
console.log(firstName + ' ' + age);

let job, isMarried;
job = 'Teacher';
isMarried = true;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

// Variable mutation
age = 'twenty nine';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

let lastName = prompt('What is her last name?');
console.log(firstName, lastName);