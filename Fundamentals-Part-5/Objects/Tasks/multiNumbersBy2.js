//Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

//Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

//P.S. Use typeof to check for a number here.


let multiplyNumeric = (obj) => {
    for (let size in obj) {
        if (typeof obj[size] == 'number') {
            obj[size] *= 2;
        }
    }

};

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let ages = {
    bracken: 3,
    dragon: 9,
    isLite: false,
    time: 4
}

multiplyNumeric(menu);
multiplyNumeric(ages);
console.log(ages);
