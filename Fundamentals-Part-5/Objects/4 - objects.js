/*
let user = new Object(); //"Object constructor" syntax
let user = {}; //"Object literal" syntax
*/
let user = {
    name: "John",
    age: 30,
    "likes birds": true,
};

user.isAdmin = true;
delete user.age;

console.log(user.name);
console.log(user.isAdmin);
console.log(user.age);
console.log(user);