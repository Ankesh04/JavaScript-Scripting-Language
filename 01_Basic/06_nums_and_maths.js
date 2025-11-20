const score = 400
// console.log(score);  //400

const balance = new Number(100)
// console.log(balance);  [Number: 100]

// console.log(balance.toString().length);      converted to string and length of string
// console.log(balance.toFixed(1));             convert to decimal with fixed decimal length

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));     123.9  convsrts to string and only 4 charector will be there the rest charector will be round off 
// but if the number is less than precision then it will shoe exponential value

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   10,00,000   add commas as indian values

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);      Object {Math}
// console.log(Math.abs(-4));       absolute value 4
// console.log(Math.round(4.6));        round of
// console.log(Math.ceil(4.2));         5
// console.log(Math.floor(4.9));        4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());     //0 to 1
console.log((Math.random()*10) + 1);    
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)