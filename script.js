// The getElementById is a method used an specific element
// The innerHTML property is useful for getting or replacing the content of HTML elements
var oldText = document.getElementById('demo').innerHTML;
console.log(oldText);

document.getElementById('demo').innerHTML = 'Salut, monde ! :D';