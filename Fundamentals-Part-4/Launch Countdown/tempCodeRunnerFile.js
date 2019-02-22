let i = 10;
let output = document.querySelector('.output');




while (i >= 0) {
    let para = document.createElement('h1');
    if (i === 10) {
        para.textContent = 'Countdown 10';

    } else if (i === 0) {
        para.textContent = 'BLAST OFF!';

    } else {

        para.textContent = i;
    }

    output.appendChild(para);

    i--;  

}