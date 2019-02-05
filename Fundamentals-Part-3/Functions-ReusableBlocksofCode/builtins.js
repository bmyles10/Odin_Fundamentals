const myText = 'This shit';
const newText = myText.replace('shit','here');
console.log(newText);
console.clear();
let myArray = ['I', 'love', 'you','bih'];
let combine = myArray.join(' ');
console.log(combine);
const ranNum = Math.random();
console.log(ranNum);

function rando(num) {
    return Math.random()* num;
}

console.log(rando(10));