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

// let firstName = 'Bita';
// let age = 29;

// if (age < 13) {
//     console.log(firstName + ' is a girl');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager');
// } else {
//     console.log(firstName + ' is a woman');
// }

/***********************************
Ternary operator and switch statements
 */

// let firstName = 'Bita';
// let age = 29;

// age >= 21 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks water');

// let drink = age >= 21 ? 'beer' : 'water';

// switch statement

// let job = 'teacher';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to read.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives people around.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a girl');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     default:
//         console.log(firstName + ' is a woman');
// }

/***********************************
Truthy and Falsy
 */

// let height;
// height = 23;

// if (height || height === 0) {
//     console.log('variable is defined');
// } else {
//     console.log('variable is not defined');
// }

// equality operators
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }

/***********************************
Coding Challenge 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 69, 126, and 103 points, while Mikes team scored 116, 94, and 123 points.

1. Calculate the average score for each team.
2. Decide which teams wins in average (heighest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (same average score).

4. EXTRA: Mary also plays basketball and her team scored 97, 134, and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
 */

// let johnAverage = (100 + 200 + 88) / 3;
// console.log(johnAverage);
// let mikeAverage = (98 + 150 + 120) / 3;
// console.log(mikeAverage);
// let maryAverage = (69 + 126 + 103) / 3;
// console.log(maryAverage);

// if (johnAverage > mikeAverage && johnAverage > maryAverage) {
//     console.log('john had a higher average of ' + johnAverage);
// } else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
//     console.log('mike had a higher average of ' + mikeAverage);
// } else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
//     console.log('mary had a higher average of ' + maryAverage);
// } else {
//     console.log('mary, john, and mike tied with their averages being ' + johnAverage);
// }


/***********************************
Functions
 */

// function calculateAge(birthYear) {
//     return 2020 - birthYear;
// }

// let bitaAge = calculateAge(1990);
// let mikeAge = calculateAge(1985);
// let janeAge = calculateAge(1969);
// console.log(bitaAge, mikeAge, janeAge);

// function yearsUntilRetirement(year, firstName) {
//     let age = calculateAge(year);
//     let retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired!');
//     }
// }

// yearsUntilRetirement(1990, 'Bita');
// yearsUntilRetirement(1985, 'Mike');
// yearsUntilRetirement(1949, 'Jane');


/***********************************
Function statements & expressions
 */

//*declaration

// function whatDoYouDo(job, firstName) {}

//*expression

// let whatDoYouDo = function (job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to read';
//         case 'driver':
//             return firstName + ' drives around all day';
//         case 'designer':
//             return firstName + ' makes beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'Bita'));
// console.log(whatDoYouDo('designer', 'Mark'));
// console.log(whatDoYouDo('retired', 'Jane'));


/***********************************
Arrays
 */

// //*initialize new array
// let names = ['Bita', 'John', 'Mark'];
// let years = [1990, 1969, 1948];

// console.log(names[0]);
// console.log(names);
// console.log(names.length);
// console.log(years[2]);

// //*mutate array
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// //*different data types
// let john = ['John', 'Smith', 1990, 'teacher', false];

// //*add to back
// john.push('blue');
// //*add to front
// john.unshift('Mr.')
// //*remove one from end
// john.pop()
// console.log(john);

// console.log(john.indexOf(1990));

/***********************************
Coding Challenge 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $40, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% when the bill is more than $200. (*John is a bad tipper).

In tht end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

NOTE: to calculate 20% of a value, simply multiply it with 20/100 = 0.2
*/

// function tipCalculator(bill) {
//     let percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// let bills = [124, 40, 268];
// let tips = [tipCalculator(bills[0]),
// tipCalculator(bills[1]),
// tipCalculator(bills[2])];
// console.log(tips);
// let total = [bills[0] + tips[0],
// bills[1] + tips[1],
// bills[2] + tips[2]];
// console.log(total);

/***********************************
Objects and properties
 */

// let bita = {
//     firstName: 'Bita',
//     lastName: 'Delarosa',
//     birthYear: 1990,
//     family: ['Chris', 'Bart', 'Milhouse', 'Coconut'],
//     job: 'teacher',
//     isMarried: true
// };
// console.log(bita);
// console.log(bita.lastName);
// let x = 'birthYear';
// console.log(bita[x]);

// //* mutate the object
// bita.job = 'designer';
// bita['isMarried'] = false;
// console.log(bita);


/***********************************
Objects and methods
*/

// let bita = {
//     firstName: 'Bita',
//     lastName: 'Delarosa',
//     birthYear: 1990,
//     family: ['Chris', 'Bart', 'Milhouse', 'Coconut'],
//     job: 'teacher',
//     isMarried: true,
//     calculateAge: function (birthYear) {
//         this.age = 2020 - this.birthYear;
//     }
// };

// bita.calculateAge();
// console.log(bita);


/***********************************
Coding Challenge 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and respective BMI. Don't forget they might have the same BMI.
*/


// let mark = {
//     fullName: 'Marky Mark',
//     mass: 70,
//     height: 1.8,
//     calculateBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// let john = {
//     fullName: 'John Doe',
//     mass: 80,
//     height: 1.9,
//     calculateBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// mark.calculateBMI();
// john.calculateBMI();
// console.log(mark, john);


// if (mark.bmi > john.bmi) {
//     console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// } else if (john.bmi > mark.bmi) {
//     console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// } else console.log('Both ' + mark.fullName + ' and ' + john.fullName + ' have the same bmi of ' + mark.bmi);


/***********************************
Looping and iteration
*/

/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let john = ['John', 'Smith', 1990, 'teacher', false];
for (let i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//* while loop

let i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// break statements

// let john = ['John', 'Smith', 1990, 'teacher', false];
// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (let i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// //* looping backwards
// for (let i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }

/***********************************
Coding Challenge 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180, and $42.
John likes to tip 20% of the bill when the bill is less than $50, %15 when the bill is between $50 and $200, and 10% if the bill is more than $200. (He's still cheap)

Implement a tip calculator using objects and loops!
1. Create an object with an array for the bill values.
2. Add a method to calculate the tip.
3. This method should include a loop to iterate over all the paid bills and do the tip calculations.
4. As an output, create 1) a new array containing all the tips, and 2) an array containing final paid amounts (bill + tip). HINT: start with two empty arrays as properties then fill them up in the loop.
*/

let john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calculateTips: function () {
        this.tips = [];
        this.finalValue = [];
        for (let i = 0; i < this.bills.length; i++) {
            let percentage;
            let bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalValue[i] = bill + bill * percentage;
        }
    }
}

john.calculateTips();
console.log(john);