let btn = document.querySelector('#btn');
btn.onclick = () => alert('Sup bro');
//This is a little better. We’ve moved the JS out of the HTML and into a JS file, but we still have the problem that a DOM element can only have 1 “onclick” property.
let alertFunction = () => alert("What that mouf do.");
btn2.onclick = alertFunction;