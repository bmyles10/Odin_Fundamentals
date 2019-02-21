let support = ["Brandon", "Theo", "Rob", "Jarrod", "Jessica"];
let slogan = 'The Following people work for support: ';


//While Loop

let i = 0;
while (i < support.length) {
    if (i === support.length - 1) {
        slogan += 'and ' + support[i] + '.';
    } else {
        slogan += support[i] + ', ';
    }
}

/*
for (let i = 0; i < support.length; i++) {
    if (i === support.length - 1) {
        slogan += 'and ' + support[i] + '.';
    } else {
        slogan += support[i] + ', ';
    }
    
}
*/


console.log(slogan);