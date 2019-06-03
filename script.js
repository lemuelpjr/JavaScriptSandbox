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
var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#0c6';

// PARENT ELEMENT
// itemList.parentElement.style.color = '#2a2a2a';

// CHILD NODES AND CHILDREN
console.log(itemList.childNodes); // outputs line breaks and spaces
console.log(itemList.children); // doesn't output line breaks and spaces
itemList.children[2].style.color = '#f06';