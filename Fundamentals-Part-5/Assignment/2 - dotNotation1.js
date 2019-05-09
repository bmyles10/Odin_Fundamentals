//sub-namespaces

let person = {
    name: {
        first: 'Brandon',
        last: 'Myles'
    },
    age: 30,
    gender: 'male',
    interests: ['sports', 'food', 'music'],
    bio: function() {
        console.log(name.first + ' ' + name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ', ' + this.interests[1] + ', and ' + this.interests[2] + '.');
    },
    greeting: function() {
        return `Hi I'm ${name.first}.`;
    }
};

console.log(person.name.first)
console.log(person.bio())