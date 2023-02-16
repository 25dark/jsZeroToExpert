// Remember, we're gonna use strict mode in all scripts now!
'use strict';
console.log(`whats up dude`);
const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));

//PROBLEM
/*We work for a company building a smart home thermometer.  Our most recent
task is this: Given an array of temperatures of one day, calculate the 
temperature amplitude. keep in mind that sometimes there might be a sensor 
error*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// -- What is temp amplitude? answer: difference between highest and lowest temp
// -- How to compute max and min temperatures?
// -- What's a sensor error? and what to do?

// 2) Breaking up into sub-problems 
// -- How to ignore errors?
// -- Find max value in temp array
// -- Find min value in temp array
// -- Subract min from max (amplitude) and return it
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    for (let i = 0; i < temps.length; i++) {
        if (temps[i] > max) max = temps[i];
    }
    console.log(max);
}
calcTempAmplitude([3, 6, 12]);