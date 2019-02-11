let func = (arg1, arg2, ...argN) => expression;
//This creates a cuntion *func* that has arguments *arg1..argN*, evalutes the expression on the right side with their use and returns its result.

//Same as:

let func2 = function(arg1,arg2,...argN) {
    return expression;
}

let sum = (a, b) => a + b;

console.log(sum(1,2));

//If we have only one argument, then parentheses can be omitted, making that even shorter:

let double = b => b *2;

console.log(double(3));

//If no arguments, just use empty parentheses
let sayHi = () => console.log("Hi Bitch");

console.log(sayHi());

let age = 10;
let welcome = (age < 18) ?
    () => console.log('Hello'):
    () => console.log('Greetings');

welcome();

//Multiline arrow functions
let sum1 = (a,b) => {
    let result = a + b;
    return result;
}

console.log(sum1(9,80));