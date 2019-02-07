function showMessage(from, text) {
   return `${from} ${text}`;
}

//console.log(showMessage('Brandon','Welcome nigga'));

function showMessage2(from, text = 'no text given') {
    return `${from} ${text}`;
}

//console.log(showMessage2('ann',));

function sum(a,b) {
    return a + b;
}

//console.log(sum(5,3))

function checkAge(age) {
    if(age >= 18) {
        return `You are ${age} come on in this bitch`;
    } else {
        return `We see that you are ${age}, come back when you are older kid.`
    }
}

let age = 20;
checkAge(age);

console.log(checkAge(age));

if (checkAge(age)) {
    console.log('Access granted')
} else {
    console.log('Access denied');
}

function showMovie(age) {
    if (checkAge(age) === false) {
        return 'You can\'t watch this';
    } else{
        return 'Showing you the movie';
    }

    
}

console.log(showMovie(age));