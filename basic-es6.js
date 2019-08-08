// Button click function
let lastParagraph = document.querySelector('.list-item:last-child');

document.getElementById('button').addEventListener('click', function () {
  lastParagraph.innerHTML = 'Please, open the browser console to see the results of this current version';
  lastParagraph.style.color = '#f06';
});

// TESTING ARROW FUNCTIONS
// Using ES5 syntax
// function sum(a, b) {
//   return a + b;
// }
// // Using ES6 syntax
// let sum2 = (a,b) => a + b;

// console.log(`The result with ES5 syntax is ${sum(5, 4)}`);
// console.log(`The result with ES6 syntax is ${sum2(5, 4)}`);