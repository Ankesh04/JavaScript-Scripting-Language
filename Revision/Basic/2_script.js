// Iterations
// For loop
// i = 2;
// console.log(i + 2);
// console.log(i);
// for (let i = 2; i <= 10; i = i + 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(7 * i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(`7 * ${i} = `, 7 * i);
// }

// let odd = 0;
// let even = 0;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     odd++;
//   } else {
//     even++;
//   }
// }
// console.log("Number of odds are ", odd);
// console.log("Number of evens are", even);

// let div5 = 0;
// let div3 = 0;
// for (let i = 1; i <= 30; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`${i} is divisible by 3 & 5.`);
//   }
// }

// While

// while (true) {
//   let grade = prompt("Enter your grade");
//   if (grade.length > 1) {
//     alert("Grade is of Single Alphabet");
//     continue;
//   } else if (grade.length < 1) {
//     alert("YOu have enter the grade");
//   } else {
//     grade = grade.toUpperCase();
//     let flag = true;
//     console.log(grade);
//     switch (grade) {
//       case "A":
//         alert("You have passed exams, Go get break");
//         break;
//       case "B":
//         alert("You have passed exams, Go study");
//         break;
//       case "C":
//         alert("You have passed exams, Go get sleep");
//         break;
//       case "D":
//         alert("You have failed exams, Go die");
//         break;
//       default:
//         flag = false;
//         alert("you  have entered wrong grades");
//         break;
//     }
//     if (flag) {
//       break;
//     }
//   }
// }

// let num = prompt("Enter a plindrom number to check");
// temp = num;
// rev = 0;
// while (num > 0) {
//   ld = num % 10;
//   rev = rev * 10 + ld;
//   num = Math.floor(num / 10);
//   console.log(num);
// }
// if (rev == temp) {
//   alert("palindrom");
// }
// else{
//     alert("not plaindrom")
// }

let num1 = prompt("Enter the number for armstrong:") - 0 + "";
// let num1 = Number(prompt("Enter the number for armstrong:"));
let i = num1;
let count = num1.length;
console.log("hello", count);
let check1 = 0;
while (num1 > 0) {
  ld = num1 % 10;
  check1 = check1 + ld ** count;
  num1 = Math.floor(num1 / 10);
}
if (i == check1) {
  alert("the number is armstrong");
} else {
  alert("the number is not armstrong");
}
