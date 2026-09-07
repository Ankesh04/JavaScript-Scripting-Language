// String methods

// let a = " Ayush "; //use single qutoes if not using apostrofy anywhere and is only single lined
// let b = " Ankesh "; //use double quote if you are not using any more double quote or multi line strings
// let c = `Hello ${a},
//  I am ${b}`; //use backtics if you want multi line strings
// console.log(c);

// console.log(a.toUpperCase());
// console.log(b.toLowerCase());
// console.log(a.repeat(4));
// console.log(c.concat(b, c));
// console.log(a.substring(2, 5));
// console.log(a.trimStart());
// console.log(b.trimEnd());
// console.log(b.trim());
// console.log(a.slice(-4));
// console.log(a.slice(-2, -6));

let d = "banana apple ankesh guava ankesh";
console.log(d.replace("banana", "mango"));
console.log(d.replaceAll("ankesh", "ANKESH"));
// console.log(d.split(" "));
console.log(d.startsWith("banana"));
console.log(d.endsWith("ankesh"));
let e = "ankesh";
console.log(e.padStart(12, "D "));
console.log(e.padEnd(10, "DAZZIDO"));
console.log(e.includes("esh"));
