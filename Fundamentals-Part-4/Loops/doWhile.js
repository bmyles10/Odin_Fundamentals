let afcMessage = "These teams play for the AFC North: ";
let afcNorth = ["Steelers", "Bengals","Ravens","Browns"];

let j = 0;

do{
  if (j === afcNorth.length - 1) {
    afcMessage += afcNorth[j] + '.';
  } else {
    afcMessage += afcNorth[j] + ', ';
  }

  j++
} while (j < afcNorth.length);

console.log(afcMessage);