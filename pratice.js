//for each

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// for (let el of numbers) {
//   console.log(el);
// }

// const movies = [
//   { title: "The Shawshank Redemption", rating: 80 },
//   { title: "Pulp Fiction", rating: 88 },
//   { title: "Inception", rating: 90 },
//   { title: "The Dark Knight", rating: 85 },
//   { title: "Forrest Gump", rating: 92 },
//   { title: "The Matrix", rating: 86 },
//   { title: "Gladiator", rating: 87 },
//   { title: "The Godfather", rating: 94 },
//   { title: "Jurassic Park", rating: 82 },
//   { title: "Avatar", rating: 89 },
// ];

// movies.forEach(function (movie) {
//   console.log(`${movie.title} - ${movie.rating}/100`);
// });

// const tit = movies.forEach(function (t) {
//   return t.title.toUpperCase();
// });

// arrow functions

// Use the map method to create a new array of formatted movie titles and ratings
// const formattedMovies = movies.map(
//   (movie) => `${movie.title} - ${movie.rating / 10}`
// );

// // Log the new array
// console.log(formattedMovies);

// setTimeout(() => {
//   console.log("Hello Bigman");
// }, 2000);

// setTimeout(() => {
//   console.log("I'm currently learning some great stuff");
// }, 4000);

// setTimeout(() => {
//   console.log("and very soon i will implement them");
// }, 6000);

// setTimeout(() => {
//   console.log("WooHoo... Crazy Stuff");
// }, 10000);

// FILTER

// Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).
// It should return a new array, containing only the usernames that are less than 10 characters. For example:

// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]

// function validUserNames(usernames) {
//   return usernames.filter((usernames) => usernames.length < 10);
// }

// Some/Every Exercise
// Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.
// Otherwise, return false.  Use some or every to help you do this!  (only one of them is actually useful here)

// allEvens([2,4,6,8]) //true
// allEvens([1,4,6,8]) //false
// allEvens([1,2,3]) //false

// function allEvens(arr){
//   return arr.every(arr => arr % 2 === 0)
//   }

const colors = require("colors");

const user = {
  email: "henrydanso6@gmail.com",
  firstName: "Henry",
  lastName: "Danso",
  born: 1997,
  city: "Accra",
  state: "Santa Maria",
};

const fullName = function (user) {
  const { email, firstName, lastName, born, city, state } = user;
  return `${firstName} ${lastName} ${email}`;
};

const p = document.querySelector("p");

p.append("I am a new text");
