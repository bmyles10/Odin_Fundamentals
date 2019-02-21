let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(typeof fruits);

//THis does not work on old browsers
console.log(Array.isArray(fruits))

//Creating my own function to see if something is an Array
let isArray = x => {
    return x.constructor.toString().indexOf("Array") > -1;
}
console.log(isArray(fruits))


