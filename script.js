// THE DOCUMENT OBJECT
// console.dir(document);
// I can get any element into a HTML document
// console.log(document.URL);
// console.log(document.title);
// document.title = 'This DOM Sandbox is AWESOME!'; // changes title
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.all); // html collection with everything in the DOM

// GET ELEMENT BY ID
// var paragraphOne = document.getElementById('paragraph-one');
// var header = document.getElementById('header-title');
// paragraphOne.textContent = 'Salut !';
// paragraphOne.innerText = 'Aurevoir !';
// paragraphOne.innerHTML = '<h3>Hello! ^^</h3>';
// header.style.borderBottom = 'solid 4px #f06';
// console.log(paragraphOne);

// GET ELEMENTS BY CLASS NAME
// var items = document.getElementsByClassName('list-item');
// console.log(items);
// items[0].innerHTML = 'Eae mundão kkk!';
// items[0].style.fontWeight = 'bold';

// for (var i = 1; i < items.length; i += 2) {
//   items[i].style.backgroundColor = '#0c6';
// }

// GET ELEMENTS BY TAG NAME
// var list = document.getElementsByTagName('li');
// console.log(list);
// list[0].style.fontWeight = 'bold';

// for (var i = 0; i < list.length; i += 2) {
//   list[i].style.backgroundColor = '#0c6';
// }

// QUERY SELECTOR
// var header = document.querySelector('.title');
// header.style.backgroundColor = '#f06';
// header.style.color = '#2a2a2a';
// var lastItem = document.querySelector('.list-item:last-child');
// lastItem.style.fontSize = '1.3rem';

// QUERY SELECTOR ALL
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.color = '#0f6';
// }

// PARENT NODE
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#0c6';

// PARENT ELEMENT
// itemList.parentElement.style.color = '#2a2a2a';

// CHILD NODES AND CHILDREN
// console.log(itemList.childNodes); // outputs line breaks and spaces
// console.log(itemList.children); // doesn't output line breaks and spaces
// itemList.children[2].style.color = '#f06';

// FIRST CHILD AND FIRST ELEMENT CHILD
// console.log(itemList.firstChild); // outputs line breaks and spaces
// console.log(itemList.firstElementChild); // outputs the real first child element
// itemList.firstElementChild.textContent = 'Hey yo!';

// LAST CHILD AND LAST ELEMENT CHILD
// console.log(itemList.lastChild); // outputs line breaks and spaces
// console.log(itemList.lastElementChild); // outputs the real last child element
// itemList.lastElementChild.textContent = 'さようなら！';

// NEX SIBLING AND NEXT ELEMENT SIBLING
// console.log(itemList.nextSibling); // outputs line breaks and spaces
// console.log(itemList.nextElementSibling); // outputs the real next sibling element

// PREVIOUS SIBLING AND PREVIOUS ELEMENT SIBLING
// console.log(itemList.previousSibling); // outputs line breaks and spaces
// console.log(itemList.previousElementSibling); // outputs the real previous sibling element

// CREATE ELEMENT
// var newDiv = document.createElement('div');
// newDiv.className = 'more-content';
// newDiv.id = 'script-div';

// var newDivText = document.createTextNode('Hello world!');
// newDiv.appendChild(newDivText);
// console.log(newDiv);

// ADD EVENT LISTENERS
// var button = document.getElementById('button').addEventListener('click', function(){
//   console.log('Yeehaaa!'); // anonymous function
// });
// var button = document.getElementById('button').addEventListener('click', cowboyShout);
// function cowboyShout() {
//   console.log('Yeehaaa!');
// }
// var button = document.getElementById('button').addEventListener('click', function(){
//   document.querySelector('.list-item:last-child').style.backgroundColor = '#0c6';
//   document.querySelector('.list-item:last-child').style.color = '#2a2a2a';
// });

// // TESTING OBJECT CONSTRUCTORS
// var Book = function (title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }

// // BOOK CONSTRUCTOR INSTANCES
// var bookOne = new Book('I, Robot', 'Isaac Asimov', 1950);
// var bookTwo = new Book('Huckleberry Finn', 'Mark Twain', 1885);
// var bookThree = new Book('Think And Grow Rich', 'Napoleon Hill', 1937);

// // OBJECT PROTOTYPES
// Book.prototype.howOld = function (currentYear) {
//   // console.log(currentYear - this.year);
//   return currentYear - this.year;
// };

// // PROTOTYPE INHERITANCE
// // bookOne.howOld(2019);
// // bookTwo.howOld(2019);
// // bookThree.howOld(2019);

// // ADDING CONSTRUCTOR DATA WITH INHERITANCE TO THE DOM
// var lastParagraph = document.querySelector('.list-item:last-child'); 

// document.getElementById('button').addEventListener('click', function(){
//   lastParagraph.innerHTML = 'The book I\'m reading now is <em>' + bookOne.title + '</em>, written by ' + bookOne.author + ' and launched in ' + bookOne.year + '. This book is now ' + bookOne.howOld(2019) + ' years old!';
// });

// TESTING OBJECT CONSTRUCTORS AGAIN
// var Tshirt = function (color, size, stamp) {
//   this.color = color;
//   this.size = size; // small, medium, large, extra-large
//   this.stamp = stamp;
// }

// // T-SHIRT CONSTRUCTOR INSTANCES
// var tshirtOne = new Tshirt('black', 'medium', true);
// var tshirtTwo = new Tshirt('gray', 'small', false);
// var tshirtThree = new Tshirt('violet', 'large', true);

// // OBJECT PROTOTYPES
// Tshirt.prototype.personAge = function (age) {
//   if (age >= 18) {
//     console.log('This T-shirt is for an adult.');
//   } else if (age > 12 && age < 18) {
//     console.log('This T-shirt is for a teen.');
//   } else {
//     console.log('This T-shirt is for a child.');
//   }
// };

// // PROTOTYPE INHERITANCE
// tshirtOne.personAge(28);
// tshirtTwo.personAge(13);
// tshirtThree.personAge(7);

// // ADDING CONSTRUCTOR DATA WITH INHERITANCE TO THE DOM
// var lastParagraph = document.querySelector('.list-item:last-child');

// document.getElementById('button').addEventListener('click', function () {
//   lastParagraph.innerHTML = 'The T-shirt I am currently wearing has a ' + tshirtOne.color + ' color and a ' + tshirtOne.size + ' size.';
//   lastParagraph.style.color = '#f06';
// });

// // PASSING FUNCTIONS AS ARGUMENTS INSIDE FUNCTIONS
// var numbers = [1, 3, 5, 18, 24, 32, 45, 81];

// // Generic function for properties of numbers
// function numProperties(numArray, fn) {
//   var newArray = [];
//   for (var i = 0; i < numArray.length; i++) {
//     newArray.push(fn(numArray[i]));
//   }
//   return newArray;
// }

// // Check if number is odd or even
// function oddOrEven(n) {
//   if (n % 2 === 0) {
//     return n + ' is an EVEN number.';
//   } else {
//     return n + ' is an ODD number.';
//   }
// }

// // Call function
// var oddsAndEvens = numProperties(numbers, oddOrEven);

// console.log(oddsAndEvens);

// FUNCTIONS RETURNING FUNCTIONS
// Check available budget
// function logoType(budget) {
//   if (budget <= 100) {
//     return function(name) {
//       console.log(`${name} your logo will be ready in 1 week.`);
//     };
//   } else if (budget > 100 && budget < 200) {
//     return function(name) {
//       console.log(`${name} your logo will be ready in 2 weeks.`);
//     };
//   } else {
//     return function(name) {
//       console.log(`${name} your logo will be ready in 3 to 4 weeks.`);
//     };
//   }
// }

// // Call both functions at the same time
// logoType(130)('Mark');
// logoType(80)('Lukas');
// logoType(260)('Anna');

// TESTING ARROW FUNCTIONS
// Using ES5 syntax
function sum(a, b) {
  return a + b;
}
// Using ES6 syntax
let sum2 = (a,b) => a + b;

console.log(`The result with ES5 syntax is ${sum(5, 4)}`);
console.log(`The result with ES6 syntax is ${sum2(5, 4)}`);

// Button click function
let lastParagraph = document.querySelector('.list-item:last-child');

document.getElementById('button').addEventListener('click', function () {
  lastParagraph.innerHTML = 'Please, open the browser console to see the results of this current version';
  lastParagraph.style.color = '#f06';
});