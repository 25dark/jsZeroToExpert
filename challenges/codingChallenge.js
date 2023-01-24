//CODING CHALLENG

// Store Mark's and John's mass and height in variables
const markMass = 78;
const markHeight = 1.69;
const markMass2 = 95;
const markHeight2 = 1.88;


const johnMass = 92;
const johnHeight = 1.95;
const johnMass2 = 85;
const johnHeight2 = 1.76;
// Calculate both mark's BMIs using the formula
const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / (johnHeight * johnHeight);

const BMIMark2 = markMass2 / markHeight2 ** 2;
const BMIJohn2 = johnMass2 / (johnHeight2 * johnHeight2);
const markHeightBMI = BMIMark > BMIJohn;

// Create a Boolean Variable 'markHigherBMI' containing info about whether
// Mark has a high BMI than John

console.log(BMIMark, BMIJohn, markHeightBMI);





// coding challenge 2
// Use the BMI example from challenge #1, and the code you already wrote, and improve it

/* print a nice output to the console, saying who has the higher BMI
    Mark's BMI is higher than John's! or John's BMI is higher than Mark's!
*/

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI is higher that John's`);
} else {
    console.log(`John's BMI is higher than Mark's!`);
}

// String Iteral

if (BMIMark2 > BMIJohn2){
    console.log(`Mark's BMI (${BMIMark2}) is higher than John's BMI (${BMIJohn2})`);
} else {
    console.log(`Mark's BMI (${BMIMark2}) is lesser than John's BMI (${BMIJohn2})`);
}