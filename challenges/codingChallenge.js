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


/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//DATA 1 FOR DOLPHINS
// const dolphinsScore1 = 96; 
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;

//DATA BONUS 1 FOR DOLPHINS
// const dolphinsScore1 = 97; 
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

//DATA BONUS 2 FOR DOLPHINS
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;


//DATA 1 FOR KOALAS
// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;


//DATA BONUS 1 FOR KOALAS
// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;


////DATA BONUS 2 FOR KOALAS
const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;

//1
const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

//2
if (dolphinsAverageScore > koalasAverageScore) {
    console.log(`Dolphins with the average score of (${dolphinsAverageScore}) beats Koalas with a margin of (${dolphinsAverageScore - koalasAverageScore})`);
} else if (dolphinsAverageScore === koalasAverageScore) {
    console.log(`That was a tough competition because no one came first`);
} else {
    console.log(`Dolphins with the average score of (${dolphinsAverageScore}) couldn't beat Koalas average score of (${koalasAverageScore})`);
}

// BONUS Q1
const minimumScore = 100;
/*Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks */

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumScore){
    console.log(`Dolphins are the greatest of all time`);
} else if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore != minimumScore){
    console.log(`We will be waiting for you guys next season`);
}else if (dolphinsAverageScore === koalasAverageScore){
    console.log(`We will be waiting for you two next season`);
} else {
    console.log(`Give a BIG shouts to the KOALAS for becoming the GOAT champions`);
}


/* Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 */

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`the bill was ${bill}, the tip was ${tip}, and the final value
(${bill+ tip}).`);