// /*****************************
// Variables and data types
// */

// // let firstName = 'Bita';
// // console.log(firstName);

// // let lastName = 'De La Rosa';
// // let age = 29;
// // console.log(lastName, age);

// // let fullAge = true;
// // let job = 'Teacher';
// // console.log(fullAge, job);

// /*****************************
// Variable mutation and type coercion
// */

// let firstName = 'Bita';
// let age = 29;

// //Type coercion
// console.log(firstName + ' ' + age);

// let job, isMarried;
// job = 'Teacher';
// isMarried = true;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

// // Variable mutation
// age = 'twenty nine';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

// let lastName = prompt('What is her last name?');
// console.log(firstName, lastName);

/***********************************
Basic operators
 */

// let year, yearBita, yearChris;
// year = 2020;
// ageBita = 29;
// ageChris = 31;

// // math operators
// yearBita = year - ageBita;
// yearChris = year - ageChris;

// console.log(yearBita, yearChris);
// console.log(year + 20);
// console.log(year * 20);
// console.log(year / 20);

// // logical operators

// let chrisOlder = ageChris > ageBita;
// console.log(chrisOlder);

// // typeof operators
// console.log(typeof chrisOlder);
// console.log(typeof ageBita);
// console.log(typeof 'Chris is older than Bita');
// let x;
// console.log(typeof x);

/***********************************
Operator precedence
 */

let year = 2020;
let yearBita = 1990;
let fullAge = 21;

// multiple operators
let isFullAge = year - yearBita >= fullAge;
console.log(isFullAge);

// grouping
let ageBita = year - yearBita;
let ageChris = 31;
let average = (ageBita + ageChris) / 2;
console.log(average);

// multiple assignments
let x, y;