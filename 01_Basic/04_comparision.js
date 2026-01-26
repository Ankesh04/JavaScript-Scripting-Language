// console.log(2 > 1);  
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);    true
// console.log("02" > 1);   true

console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true   null converted to 0

console.log(undefined == 0);    //false
console.log(undefined > 0);     //false
console.log(undefined < 0);     //false

// === strict check

console.log("2" == 2);// true because to converted to number
console.log("2" === 2);//false because to strictly checks the datatypes of both the values