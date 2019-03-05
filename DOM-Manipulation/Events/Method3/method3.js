let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert('Sup Blood');
})
let alertFunction = () => alert("What head cuh?");
btn2.addEventListener('click', alertFunction);

/*

Now, we maintain separation of concerns, and we also allow multiple event listeners if need arise. Method 3 is much more flexible and powerful, though it is a bit more complex to set up.

*/

