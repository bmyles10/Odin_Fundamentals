let person = {
    name: ['Brandon', 'Myles'],
    age: 30,
    gender: 'male',
    interests: ['sports', 'food', 'music'],
    bio: function() {
        console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ', ' + this.interests[1] + ', and ' + this.interests[2] + '.');
    },
    greeting: function() {
        return `Hi I'm ${this.name[0]}.`;
    }
};

console.log(person.name[0])
console.log(person.greeting())
console.log(person.bio())
