let teams = ["Nets", "Cavs", "Pistons", "Knicks"];
let last = teams[teams.length - 1];

let div = teams.length;
for (i = 0; i < div; i++) {
    console.log(teams[i]);
}

console.log(teams.length)
console.log(teams[0])
console.log(last)

/*
The Difference Between Arrays and Objects:

In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.
*/
/*
When to Use Arrays. When to use Objects.

    JavaScript does not support associative arrays.
    You should use objects when you want the element names to be strings (text).
    You should use arrays when you want the element names to be numbers.
*/