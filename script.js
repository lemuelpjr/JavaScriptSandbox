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
var paragraphOne = document.getElementById('paragraph-one');
var header = document.getElementById('header-title');
// paragraphOne.textContent = 'Salut !';
// paragraphOne.innerText = 'Aurevoir !';
paragraphOne.innerHTML = '<h3>Hello! ^^</h3>';
header.style.borderBottom = 'solid 4px #f06';
console.log(paragraphOne);