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
function logoType(budget) {
  if (budget <= 100) {
    return name => console.log(`${name} your logo will be ready in 1 week.`);
  } else if (budget > 100 && budget < 200) {
    return name => console.log(`${name} your logo will be ready in 2 weeks.`);
  } else {
    return name => console.log(`${name} your logo will be ready in 3 to 4 weeks.`);
  }
}

// Call both functions at the same time
logoType(130)('Mark');
logoType(80)('Lukas');
logoType(260)('Anna');

// Button click function
let lastParagraph = document.querySelector('.list-item:last-child');

document.getElementById('button').addEventListener('click', function () {
  lastParagraph.innerHTML = 'Please, open the browser console to see the results of this current version';
  lastParagraph.style.color = '#f06';
});