
const container = document.querySelector('#container');
const para = document.createElement('p');
const content = document.createElement('div');
const header3 = document.createElement('h3');
const blackMan = document.createElement('div');

header3.style.color = 'blue';
header3.textContent = "I'm a blue h3!";
para.style.color = 'red';
para.textContent = "Hey I'm red!";
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
blackMan.style.borderColor = 'blue';
blackMan.style.backgroundColor = 'pink'
let imIn = document.createElement('h1');
let meToo = document.createElement('p');
meToo.textContent = 'ME TOO!';
imIn.textContent = "I'm in a div";
blackMan.appendChild(imIn);
blackMan.appendChild(meToo);




container.appendChild(content);
container.appendChild(para);
container.appendChild(header3);
container.appendChild(blackMan);






/*
Exercise

Copy the example above into files on your own computer. To make it work you’ll need to supply the rest of the HTML skeleton and either link your javascript file, or put the javascript into a script tag on the page. Make sure everything is working before moving on!

Add the following elements to the container using ONLY javascript - do not add any HTML or CSS code.

    a <p> with red text that says “Hey I’m red!”
    an <h3> with blue text that says “I’m a blue h3!”
    a <div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
*/

/*

Important note: Your JavaScript, for the most part, is run whenever the JS file is run, or when the script tag is encountered in the HTML. If you are including your JavaScript at the top of your file, many of these DOM manipulation methods will not work because the JS code is being run before the nodes are created in the DOM. The simplest way to fix this is to include your JavaScript at the bottom of your HTML file so that it gets run after the DOM nodes are parsed and created.

*/