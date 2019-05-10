/*
So far we've only looked at retrieving (or getting) object members — you can also set (update) the value of object members by simply declaring the member you want to set (using dot or bracket notation), like this:
*/

let person = {
    name: {
        first: 'Brandon',
        last: 'Myles'
    },
    age: 30,
    gender: 'male',
    interests: ['sports', 'food', 'music'],
    bio: function () {
        console.log(name.first + ' ' + name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ', ' + this.interests[1] + ', and ' + this.interests[2] + '.');
    },
    greeting: function () {
        return `Hi I'm ${name.first}.`;
    }
};

person.age = 3;
person['name']['first'] = 'Braylon';
person['eyes'] = 'brown';
person.hair = 'Black'
person.farewell = function () {
    console.log("Bye everybody")
}

let myDataName = 'height';
let myDataValue = '1.75m';

//This only works with bracket notation. 
person[myDataName] = myDataValue;

console.log(person.farewell());
console.log(person['height'])