
function checkAge(age) {
   return age > 18 ? true : console.log('Do you have permission');
}

console.log(checkAge(5));

//Or Condition with a function
function checkAge2(age) {
    return (age > 18) || console.log('Do you have permission');
    
}

console.log(checkAge2(19));