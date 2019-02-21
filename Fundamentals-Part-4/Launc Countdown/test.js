let nfcNorth = ["Vikings", "Packers", "Lions","Bears"];
let afcNorth = ["Steelers", "Bengals","Ravens","Browns"];
let nfcMessage = "These teams play for the NFC North: ";
let afcMessage = "These teams play for the AFC North: ";

let i = 0;

while (i < nfcNorth.length) {
  if(i === nfcNorth.length - 1){
    nfcMessage += nfcNorth[i] + '.';
  } else {
    nfcMessage += nfcNorth[i] + ', ';
  }

  i++
};




console.log(nfcMessage);
