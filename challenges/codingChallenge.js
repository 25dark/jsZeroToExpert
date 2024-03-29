//CODING CHALLENG

// Store Mark's and John's mass and height in variables
// const markMass = 78;
// const markHeight = 1.69;
// const markMass2 = 95;
// const markHeight2 = 1.88;


// const johnMass = 92;
// const johnHeight = 1.95;
// const johnMass2 = 85;
// const johnHeight2 = 1.76;
// // Calculate both mark's BMIs using the formula
// const BMIMark = markMass / markHeight ** 2;
// const BMIJohn = johnMass / (johnHeight * johnHeight);

// const BMIMark2 = markMass2 / markHeight2 ** 2;
// const BMIJohn2 = johnMass2 / (johnHeight2 * johnHeight2);
// const markHeightBMI = BMIMark > BMIJohn;

// Create a Boolean Variable 'markHigherBMI' containing info about whether
// Mark has a high BMI than John

// console.log(BMIMark, BMIJohn, markHeightBMI);


// coding challenge 2
// Use the BMI example from challenge #1, and the code you already wrote, and improve it

/* print a nice output to the console, saying who has the higher BMI
    Mark's BMI is higher than John's! or John's BMI is higher than Mark's!
*/

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI is higher that John's`);
// } else {
//     console.log(`John's BMI is higher than Mark's!`);
// }

// // String Iteral

// if (BMIMark2 > BMIJohn2){
//     console.log(`Mark's BMI (${BMIMark2}) is higher than John's BMI (${BMIJohn2})`);
// } else {
//     console.log(`Mark's BMI (${BMIMark2}) is lesser than John's BMI (${BMIJohn2})`);
// }


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



//DATA BONUS 1 FOR DOLPHINS
// const dolphinsScore1 = 97; 
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;

//DATA BONUS 2 FOR DOLPHINS
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;





//DATA BONUS 1 FOR KOALAS
// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;


////DATA BONUS 2 FOR KOALAS
// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 106;

//1
// const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
// const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

// console.log(dolphinsAverageScore, koalasAverageScore);

//2
// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log(`Dolphins with the average score of (${dolphinsAverageScore}) beats Koalas with a margin of (${dolphinsAverageScore - koalasAverageScore})`);
// } else if (dolphinsAverageScore === koalasAverageScore) {
//     console.log(`That was a tough competition because no one came first`);
// } else {
//     console.log(`Dolphins with the average score of (${dolphinsAverageScore}) couldn't beat Koalas average score of (${koalasAverageScore})`);
// }

// BONUS Q1
// const minimumScore = 100;
/*Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks */

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= minimumScore){
//     console.log(`Dolphins are the greatest of all time`);
// } else if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore != minimumScore){
//     console.log(`We will be waiting for you guys next season`);
// }else if (dolphinsAverageScore === koalasAverageScore){
//     console.log(`We will be waiting for you two next season`);
// } else {
//     console.log(`Give a BIG shouts to the KOALAS for becoming the GOAT champions`);
// }


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

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`the bill was ${bill}, the tip was ${tip}, and the final value
// (${bill+ tip}).`);






/* JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores �
GOOD LUCK  */


// //DATA 1 FOR DOLPHINS
// const dolphinsScore1 = 44; 
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;


// //DATA 1 FOR KOALAS
// const koalasScore1 = 65;
// const koalasScore2 = 54;
// const koalasScore3 = 49;

// Create an arrow function 'calcAverage' to calculate the average of 3 scores
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// average score of Dolhins
// const avgDolhins = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3);
// console.log(avgDolhins);
// average score of Koalas
// const avgKoalas = calcAverage(koalasScore1, koalasScore2, koalasScore3);
// console.log(avgKoalas);

// Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// const checkWinner = (avgDolhins, avgKoalas) => {
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolhins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     } else {
//         console.log(`no team wins!`);
//     }
// }
// checkWinner(avgDolhins, avgKoalas);

//ARRAY
// const friends = ['Michael', 'Steven', 'Peter'];
// const years = new Array(1991,1984, 2008, 2020);

// years[0] = 2030;
// console.log(years);
// console.log(friends[friends.length - 1]);
// console.log(years[years.length - 1]);


/* Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data
below

3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) */


// function calcTip (bill) {
//     return  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const calcTotal = calcTip(100);
// console.log(calcTotal);

// const bills = [125, 555, 44];

// function billLoop (bills) {
//     let newArray = [];
//     for(let i = 0; i < bills.length; i++){

//          newArray.push(calcTip(bills[i]));

//     }
//     return newArray;
// }
// const tips = billLoop(bills);
// console.log(tips);

/* write a menthod called getSummary 
which should return a string which 
should summarize the data about jonas 

"Jonas is a 46-years old teacher, and he has a
driver's license"
*/

// const jonas = {
//         firstName: 'Jonas',
//         lastName: 'Schmedtmann',
//         birthyear: 1991,
//         job: 'teacher',
//         friends: ['Michael', 'Peter', 'Steve'],
//         driversLicense: true,

//         calcAge: function (birthyear) {
//             return 2037 - this.birthyear;
//         },

//         getSummary: function(){
//             return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.driversLicense ? 'a' : 'no'} driver's license`;                      
//         }

//     };

//     console.log(jonas.getSummary());



/*Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

// const mark = {
//     fullname: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function (){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }


// const john = {
//     fullname: "John Smith",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function (){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI()

// console.log(mark.bmi, john.bmi);

// console.log(`${mark.mass > john.mass ? 'Mark Miller' : 'John Smith'} BMI (${mark.bmi}) is ${mark.mass > john.mass ? 'higher' : 'lower'} than ${john.fullname} (${john.bmi})!`);



/*Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays 
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array */

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

// console.log(bills, tips, totals);

/* 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array*/

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


/*Developer Skills & Editor Setup
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4] */

const printForecast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}ºC in ${i + 1} days ...`
    }
    console.log('...' + str);
}
console.log(printForecast([12, 5, -5, 0, 4]));