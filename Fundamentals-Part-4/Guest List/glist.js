let i = 0;
let people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
let refused = document.querySelector('.refused');
let admitted = document.querySelector('.admitted');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

while (i < people.length) {
    let para = document.createElement('p');
    let para2 = document.createElement('p');
    if (people[i] === 'Phil' || people[i] === 'Lola') {
        refused.textContent += people[i] + ", ";
    } else {
        admitted.textContent += people[i] + ", ";
    }
    i++;

}


refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';
