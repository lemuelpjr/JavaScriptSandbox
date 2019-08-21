// Button click function
let lastParagraph = document.querySelector('.list-item:last-child');

document.getElementById('button').addEventListener('click', () => {
  lastParagraph.innerHTML = 'Please, open the browser console to see the results of this current version';
  lastParagraph.style.color = '#f06';
});

// TESTING ARROW FUNCTIONS
// // Using ES5 syntax
// function sum(a, b) {
//   return a + b;
// }
// // Using ES6 arrow function syntax
// let sum2 = (a, b) => a + b;

// Using ES5 syntax
// function isPositive(number) {
//   return number >= 0; // Return a true or false value
// }
// // Using ES6 arrow function syntax
// let isPositive2 = number => number >= 0; // Return a true or false value

// Using ES5 syntax
// function randomNumber() {
//   return Math.floor(Math.random() * 10);
// }
// // Using ES6 arrow function syntax
// let randomNumber2 = () => Math.floor(Math.random() * 10); // Numbers might not be the same

// DESTRUCTURING EXAMPLES
// Array example
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const [a,, c, ...rest] = alphabet; // Skip "B" and return an array with all the letters after "C"

// Object example
let tShirt = {
  color: 'Gray',
  size: 'M',
  price: 20,
  stamp: true
};

let {color, size, stamp, price} = tShirt; // Variable names MUST MATCH but the order doesn't

console.log(color, size, stamp, price);