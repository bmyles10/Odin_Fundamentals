let user = {
    name: "John",
    age: 30,
};

//set
user["likes birds"] = true;

let key = prompt("What do you think about", "name");
alert(user[key]);

//get
console.log(user["likes birds"]);



//delete
delete user["likes birds"];