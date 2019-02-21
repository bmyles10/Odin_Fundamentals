let contacts = ['Brandon:615-796-3530', 'Amanda: 615-796-4277',  'Keith:931-638-2822']
let para = document.querySelector('p');
let input = document.querySelector('input');
let btn = document.querySelector('button');

btn.addEventListener ('click', function () {
    let searchName = input.value;
    input.value = '';
    input.focus();
    for (let i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(':');
        if (splitContact[0] === searchName) {
            para.textContent = splitContact[0] + "\'s number is " + splitContact[1] + '.';
            break;
        } else {
            para.textContent = 'Contact not found.';
        }
    }
});

