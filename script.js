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

// let firstName = 'Bita';
// let age = 29;
// console.log(firstName + ' ' + age);

// let job, isMarried;
// job = 'Teacher';
// isMarried = true;
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is she married? ' + isMarried);

// // variable mutation

// age = 'twenty nine';
// job = 'teacher';
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

// let year = 2020;
// let yearBita = 1990;
// let fullAge = 21;

// // multiple operators

// let isFullAge = year - yearBita >= fullAge;
// console.log(isFullAge);

// // grouping

// let ageBita = year - yearBita;
// let ageChris = 31;
// let average = (ageBita + ageChris) / 2;
// console.log(average);

// // multiple assignments

// let x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x);

// x *= 2
// console.log(x)
// x += 10
// console.log(x)
// x -= 10
// console.log(x)
// x++;
// console.log(x)
// x--;
// console.log(x);

/***********************************
Coding Challenge 1
 */

/*
Mark and John are trying to compare their BMI, which is calculated using the formula: BMI = mass / (height * height). (Mass is in kg and height is in meters).

1. Store Mark and John's mass and height in variables.
2. Calculate both their BMIs.
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Pring a string to the console containing the variable from step 3. (Something like "Is Marks BMI higher than John's? true/false").
*/

// let markMass = 70;
// let markHeight = 1.8;
// let johnMass = 80;
// let johnHeight = 1.9;

// let markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);
// let johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// let higherBMI = markBMI > johnBMI;
// console.log(higherBMI);
// console.log('Is Marks BMI higher than Johns? The answer is ' + higherBMI);

/***********************************
If / else statements
 */


// let firstName = 'Bita';
// let civilStatus = 'married';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' is single!');
// }


// let isMarried = true;
// if (isMarried) {
//     console.log('still married!');
// } else {
//     console.log('still single!');
// }

// let markMass = 70;
// let markHeight = 1.8;
// let johnMass = 80;
// let johnHeight = 1.9;

// let markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);
// let johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// if (markBMI > johnBMI) {
//     console.log('Marks BMI is higher');
// } else {
//     console.log('Johns BMI is higher');
// }

/***********************************
Boolean logic
 */

let firstName = 'Bita';
let age = 29;

if (age < 13) {
    console.log(firstName + ' is a girl');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
} else {
    console.log(firstName + ' is a woman');
}