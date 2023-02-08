<h1>JavaScript Career</h1> <i>From Zero to Expert</i> -
<i>20|01|23</i>
<p>I began my JS career</p>
<h3>The Developer Tool</h3>

<p><b>Ctrl + shift + J</b> on google chrome to bring the developer tool</p>

<h4>What is JavaScript</4>
<p>is a high level object-oriented multi-paradign programming language</p>

VALUE
is a piece of data

Template Literals 
eg const jonasNew = `I'm ${firstName}, a ${year - birthyear} year old ${job}!`;
console.log(jonasNew);

`using backticks for all strings isn't bad too`
Creating a multi lines with backticks
console.log(`string
multiple
lines`);

'use strict'
use strict' is a directive that can be placed at the beginning of a JavaScript file or function. It indicates that the code should be executed in "strict mode," which changes some of JavaScript's default behavior in order to provide better error checking and prevent common mistakes. For example, using 'use strict' will prevent variables from being automatically created in the global scope, and will throw errors when attempting to use a variable that has not been declared. Overall, 'use strict' helps to make JavaScript code more reliable and secure.

FUNCTIONS

Function declaration - can be used before it's declared

function calcAge(birthYear) {
    return 2037 - birthYear;
}

Function expression - essentially a function value stored in a variable

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

Arrow function - great for a quick one-line functions. Has no this keyword

const calcAge = birthYear => 2037 - birthYear;


ARRAYS

OBJECTS

If a function is attached to an object, it's called a method.