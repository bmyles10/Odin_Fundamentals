let people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];


for (i = 0; i > people.length; i++) {
    let refused = document.querySelector('.refused');
    let admitted = document.querySelector('.admitted');
    admitted.textContent = 'Admit: ';
    refused.textContent = 'Refuse: ';
    if (people[i] === 'Phil' || people[i] === 'Lola') {
        refused.textContent += people[i] + ", ";
    } else {
        textContent += people[i] + ", ";
    }
}