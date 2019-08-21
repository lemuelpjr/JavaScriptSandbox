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
// // Array example
// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
// const [a,, c, ...rest] = alphabet; // Skip "B" and return an array with all the letters after "C"

// // Object example
// let tShirt = {
//   color: 'Gray',
//   size: 'M',
//   price: 20,
//   stamp: true
// };

// let {color, size, stamp, price} = tShirt; // Variable names MUST MATCH but the order doesn't

// REST OPERATOR EXAMPLES
// Function example
// const ages = [18, 21, 45, 12, 83];
// let minAge1 = Math.min(ages); // The array is passed as a single argument
// let minAge2 = Math.min(...ages); // The array will be spread into 5 individual arguments

// Array example
const parents = ['Adam', 'Eve'];
const children = ['Cain', 'Abel', 'Seth'];

const fullFamily1 = [parents, children]; // Create a nested array
const fullFamily2 = [...parents, ...children]; // Combine previous arrays into a single one

console.log(fullFamily1);
console.log(fullFamily2);