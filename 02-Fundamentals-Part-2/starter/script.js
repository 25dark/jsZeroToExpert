'use strict';
// let hasDriversLicense = true;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log('I can drive');


//Function expression
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

//bithyear

// function calAge1(birthyear){
//     return 2023 - birthyear;
// }
// const age1 = calAge1(1982); 


// const calAge2 = function (birthyear){
//     return 2023 - birthyear;
// }

// const age2 = calAge2(1982);
// console.log(age1, age2);


// Arrow Function


// const calAge3 = birthyear => 2023 - birthyear;
// const age3 = calAge3(1727)
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstname) => {
//     const age = 2023 - birthyear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstname} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1997, 'Yaw'));
// console.log(yearsUntilRetirement(1967, 'Padmore'));

//Calling a function in another function

// const cutPieces = function (fruit) {
//     return fruit * 4;
// };

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of 
//     apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }


// console.log(fruitProcessor(2, 3));


// const calAge = function (birthyear) {
//     return 2037 - birthyear;
// }

// const yearsUntilRetirement = function (birthyear, firstname) {
//     const age = calAge(birthyear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstname} retires in ${retirement} years`)
//         return retirement;
//     } else {
//         console.log(`${firstname} has already retired`)
//         return -1;
//     }

// }

// console.log(yearsUntilRetirement(1997, 'Yaw'));
// console.log(yearsUntilRetirement(1967, 'Padmore'));

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steve']
// };

// console.log(jonas['friends'][0]);
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// console.log(jonas.'first' + nameKey);

// const interestedIn = prompt('What do you want to know about Jonas?' +
//     'Choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }


// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas['friends'].length} friends, and his best friend is called ${jonas['friends'][0]}`);


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steve']
};


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// console.log('--- ONLY NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

