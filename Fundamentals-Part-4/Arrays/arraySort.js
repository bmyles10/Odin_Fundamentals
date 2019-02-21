let sup = ["Brandon","Theo","Jessica"]
sup.sort();
console.log(sup.reverse())

//Number Sort Array (Also finds lowest to Highest)
let points = [34,3,46,98,29]
let sorPoints = points.sort(function(a,b){return a-b});
sorPoints
//Decending (Also finds hightest to lowest)
let decPoints = points.sort(function(a,b){return b-a});
decPoints


//Sort Array in Random Order
let randomOr = points.sort(function(a,b){return 0.5 - Math.random()});
randomOr
