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

let div5 = 0;
let div3 = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} is divisible by 3 & 5.`);
  }
}
