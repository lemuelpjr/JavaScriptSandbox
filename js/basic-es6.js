// Button click function
let lastParagraph = document.querySelector('.list-item:last-child');

document.getElementById('button').addEventListener('click', function () {
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
function isPositive(number) {
  return number >= 0; // Return a true or false value
}

// Using ES6 arrow function syntax
let isPositive2 = number => number >= 0; // Return a true or false value

console.log(`The result using ES5 syntax is "${isPositive(5)}"`);
console.log(`The result using ES6 syntax is "${isPositive2(5)}"`);