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

// let num1 = prompt("Enter the number for armstrong:") - 0 + "";
// // let num1 = Number(prompt("Enter the number for armstrong:"));
// let i = num1;
// let count = num1.length;
// console.log("hello", count);
// let check1 = 0;
// while (num1 > 0) {
//   ld = num1 % 10;
//   check1 = check1 + ld ** count;
//   num1 = Math.floor(num1 / 10);
// }
// if (i == check1) {
//   alert("the number is armstrong");
// } else {
//   alert("the number is not armstrong");
// }

// // TO CHECK PRIME NUMBER
// let num = 50003;
// let flag = true;
// if (num < 2) flag = false;
// else if (num < 4) {
// } else {
//   if (num % 2 == 0) {
//     flag = false;
//   } else {
//   }
//   for (let i = 3; i < num / 2 + 1; i += 2) {
//     if (num % i == 0) {
//       flag = false;
//       break;
//     }
//     console.log("WE are executing");
//   }
// }
// if (flag) {
//   console.log("the number is prime");
// } else {
//   console.log("The number is not prime");
// }

// // inhance code
// let flag1 = true;
// let num1 = 50003;
// if (num1) {
//   flag1 = false;
// } else if (num == 2) {
// } else {
//   for (let i = 2; i < Math.sqrt(num) + 1; i++) {
//     if (num % i == 0) {
//       flag1 = false;
//       break;
//     }
//     console.log("we are executing");
//   }
// }
// console.log("It is a " + (flag1 ? "" : "not ") + "Prime number");

// FIbonaci series
// let a = 12;
// let sum = 0;
// let fib0 = 0;
// let fib1 = 1;
// for (let i = 0; i < a; i++) {
//   //we can use while loop as how much range it will go we donot know
//   console.log(sum);
//   sum = fib0 + fib1;
//   fib0 = fib1;
//   fib1 = sum;
//   if (sum > a) {
//     break;
//   }
// }

// // Duck number
// let b = 119;
// let flag = false;
// while (b > 0) {
//   if (b % 10 == 0) {
//     console.log("the number is duck number");
//     flag = true;
//     break;
//   }
//   b = Math.floor(b / 10);
// }
// if (!flag) console.log("It is not a Duck number");

// // neon number 9*9=81 8+1=9

// let a = 9;
// let pr0 = a ** 2;
// let pr1 = pr0;
// let temp = 0;
// flag = true;
// while (a > 0) {
//   temp = temp + (pr1 % 10);
//   pr1 = Math.floor(pr1 / 10);
//   if (pr1 == 0) {
//     break;
//   }
// }
// // console.log("It is " + (temp==a ? "" : "not ") + "a Neon number");

// if (temp == a) {
//   alert("The number is neon number");
// } else {
//   alert("The number is not neon number");
// }

// harshad number 18  1+8=9  18/9=0

let pr1 = 18;
let pr0 = pr1;
let temp = 0;
flag = true;
while (pr1 > 0) {
  temp = temp + (pr1 % 10);
  pr1 = Math.floor(pr1 / 10);
  if (pr1 == 0) {
    break;
  }
}
// console.log("It is " + (pr0 % temp == 0 ? "" : "not ") + "a Harshad number");

if (pr0 % temp == 0) {
  alert("The number is harshad number");
} else {
  alert("The number is not harshad number");
}
