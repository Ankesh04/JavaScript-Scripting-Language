// console.log("Good morning");
// //clg shorcut for console.log()
// var a;
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
// //VAR
// a = 20;
// var a = 30;
// console.log(a);

// //LET
// let k;
// // let k //X cannot be redeclared
// k = 10;
// k = 20;
// // let k = 30 X
// console.log(k);

// //CONST
// // const a  cannot be only declared
// const d = 10;
// // const d cannot be re declared if done before
// //  d=20 cannot be re initialised
// // const d =30  cannot be re decalred and reinitialised
// console.log(d);

//TYPECASTING
// implicit
// let s = 10;
// let h = "20";
// console.log(s + h);
// console.log(s - h);
// console.log(s * h);
// console.log(s * h);
// console.log(h / s);
// //explicit
// let f = "25";
// let ab = Number(f);
// console.log(ab);
// console.log(typeof ab);

// to take value from user
// let age = Number(prompt("Enter the age:"));
// console.log(age);

// //Arithematic Operqator
// let num1 = Number(prompt("Enter the First number:"));
// let num2 = Number(prompt("Enter the Second number:"));
// let addition = num1 + num2;
// let difference = num1 - num2;
// let product = num1 * num2;
// let division = num1 / num2;
// let reminder = num1 % num2;
// let power = num1 ** num2;
// console.log("The addition =", addition);
// console.log("The difference =", difference);
// console.log("The product =", product);
// console.log("The devision = ", division);
// console.log("The reminder =", reminder);
// console.log("The power product =", power);

// Comparision operator
// console.log(10 <= 10);
// console.log(10 == 10);
// console.log(10 == "10");
// console.log(10 == "100");
// console.log("qwd", 10 !== "10"); //check the data type which is not true
// console.log("qdwd", 10 !== "100"); //check the data type which is not true
// console.log(10 === 10);
// console.log(10 === "10");

//comparision operator
let a = 25;
let b = 20000;
console.log(a > 18 && b > 25000);
console.log((a > 18 && b < 25000) || age === 30);

let username = "admin";
let pswd = "123";
console.log(username == "admin" || pswd !== "123");

// assignment operator

console.log((a = a + 20));
console.log((a += 30));
console.log(a);
console.log((a -= 30));
console.log((a /= 5));
console.log((a *= 9));
console.log((a %= 17));
console.log(typeof username);

//ternairy operator
// conditiom?truestatement:falsestatement
a > 0 ? console.log("Positive") : console.log("Negative");

//Conditional statements
let age = Number(prompt("Enter your age:"));
if (age > 25) {
  console.log("Eligible for marraige");
} else {
  console.log("Not eligible for marraige");
}
//*********** */
let vote_age = Number(prompt("Enter your age:"));
if (vote_age >= 18) {
  console.log("Eligible for Vote.");
} else {
  console.log("Not eligible for Vote.");
}
//******** */
let num1 = Number(prompt("Enter the number:"));
if (num1 % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
