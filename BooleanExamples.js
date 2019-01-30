console.log( "20" > 10 ); //true, String "20" is converted to Number 20
console.log( '01' == 1 ); // true, String '01' is converted to Number 01
console.log(null < 10); //true, because null is converted to 0 in Comparision Operators, Hence 0 < 10 is true 
console.log(null > 0); //false, here null is converted to 0 in Comparision Operators, Hence 0 > 0 is false
console.log(undefined <= 0); //fasle, undefined is converted to NaN in Comparision operators hence Nan <= 0 is false
console.log(undefined == 0); //false, undefined is not converted to NaN in double Equality Comparision operators, it remains the same. Hence Undefined == 0 is false
console.log(undefined == 1); //false, undefined is not converted to NaN in double Equality Comparision operators. Hence undefined == 1 is false
console.log(null == 0); //false, null is not converted to 0 when double equality operator is used hence null == 0 is false
console.log(null == undefined); //true Sweet Couple
console.log(true == 1); //true, true is converted to a number 1,
console.log(false == 0); //true, false is converted to zero when using comparision operators
console.log( 0 == false); //true, false is converted to zero
console.log( '' == false ); //true, false is converted to zero and empty string is converted to zero always in JS
console.log( 0 === false); //false, types are different