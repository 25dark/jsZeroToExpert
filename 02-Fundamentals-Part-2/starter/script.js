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


const calAge = function (birthyear) {
    return 2037 - birthyear;
}

const yearsUntilRetirement = function (birthyear, firstname) {
    const age = calAge(birthyear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstname} has already retired`)
        return -1;
    }

}

console.log(yearsUntilRetirement(1997, 'Yaw'));
console.log(yearsUntilRetirement(1967, 'Padmore'));