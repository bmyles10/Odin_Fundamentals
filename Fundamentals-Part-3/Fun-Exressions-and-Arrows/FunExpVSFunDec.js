//function declaration
function sum(a,b) {
    return a + b;
}

//Function Expression a function, created inside an expression or inside another syntax construct. Here, the function is created at the right side of the “assignment expression”
let sum = function(a,b) {
    return a+b;
}

/*  
A Function Expression is created when the execution reaches it and is usable from then on.

Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.

A Function Declaration is usable in the whole script/code block.

In other words, when JavaScript prepares to run the script or a code block, it first looks for Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

And after all of the Function Declarations are processed, the execution goes on.

As a result, a function declared as a Function Declaration can be called earlier than it is defined.


*/

sayHi('Brandon');

function sayHi(name){
    console.log(`Hello, ${name}`) ;
}

sayHello('John');

let sayHello = function(name) {
    console.log(`Hello, ${name}`);
}

