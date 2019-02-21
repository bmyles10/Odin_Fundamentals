let pets = ["dog","cat","snake","hamster","mouse"]
//The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log(pets.toString());

console.log(pets.join(">"));

console.log(pets.pop())

console.log(pets.push("Kiwi"));

 console.log(pets.shift())

 console.log(pets.unshift("Lemon"))

 console.log(pets[pets.length] = "Orange");

console.log(pets.splice(5,5))

 console.log(pets)

let myGirls = ["Cecilie","Lone"]
let myBoys = ["Emil", "Tobias", "Linus"]
let moreNames = ["Aaron", "Ruby"]
let allNames = myGirls.concat(myBoys, moreNames, moreNames)
console.log(allNames.sort())

let badAss = myBoys.slice(2);
console.log(badAss);
console.log(allNames.slice(4))
console.log(allNames.toString());
console.log(allNames)