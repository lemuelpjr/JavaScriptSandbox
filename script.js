// THE DOCUMENT OBJECT
console.dir(document);
// I can get any element into a HTML document
console.log(document.URL);
console.log(document.title);
document.title = 'This DOM Sandbox is AWESOME!'; // changes title
console.log(document.title);
console.log(document.doctype);
console.log(document.all); // html collection with everything in the DOM