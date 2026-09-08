//ARRAY
let a = [10, 20, 30, 40];
console.log(a.length);
console.log(a.push(50));
console.log(a);
console.log(a.pop());
console.log(a.unshift(80));
console.log(a);
console.log(a.shift());
console.log(a.slice(1, 3));
// a.splice(startindex, delectcount, elementtoadd);
let ar = a.splice(1, 1, "Ankesh", "Agarwal");
console.log(ar);
console.log(a);
// to covert array to string
console.log(a.join(" "));

console.log(a.reverse());

let s1 = ["ankesh"];
let s2 = ["agarwal"];
let s3 = ["mern"];
console.log(s1.concat(s2, s3));

let b = "hello";
console.log(b.split("").reverse().join(""));
