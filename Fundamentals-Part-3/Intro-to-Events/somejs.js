let form = document.querySelector('form');
        let first_name = document.getElementById('first_name');
        let last_name = document.getElementById('last_name');
        let submit = document.getElementById('submit');
        let para = document.querySelector('p');
    
        form.onsubmit = function(e) {
            if (first_name.value === '' || last_name.value === '') {
                e.preventDefault();
                para.textContent = 'You need to fill in both names!';
            }
        }