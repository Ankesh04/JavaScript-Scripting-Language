// //ARRAY
// let a = [10, 20, 30, 40];
// console.log(a.length);
// console.log(a.push(50));
// console.log(a);
// console.log(a.pop());
// console.log(a.unshift(80));
// console.log(a);
// console.log(a.shift());
// console.log(a.slice(1, 3));
// // a.splice(startindex, delectcount, elementtoadd);
// let ar = a.splice(1, 1, "Ankesh", "Agarwal");
// console.log(ar);
// console.log(a);
// // to covert array to string
// console.log(a.join(" "));

// console.log(a.reverse());

// let s1 = ["ankesh"];
// let s2 = ["agarwal"];
// let s3 = ["mern"];
// console.log(s1.concat(s2, s3));

// let b = "hello";
// console.log(b.split("").reverse().join(""));

// // Indexes
// let ar1 = [
//   "Apple",
//   ["grapes", "dancing", [20]],
//   ["python", ["java", "35"], "html"],
// ];
// let ar2 = ["apple", ["grapes", "dancing", [20]], ["40000"], "html"];
// let ar3 = ["apple", [[300, 500], [20]], ["python", ["java", "js"], "html"]];
// console.log(ar1[1][1]);
// console.log(ar1[2][1][0]);
// console.log(ar2[2][0]);
// console.log(ar3[1][0][1]);
// console.log(ar3[2][1][1]);

let ar1 = [
  {
    name: "Ankesh",
    age: 22,
    place: "Jharkhand",
    Children: ["python", "PythonScript", ["html", ["css"]]],
    child1: {
      name: "pyhton1",
      age: 21,
      place: "pyspiders",
      Childskills: ["numpy", "pandas", ["matplotlib"]],
    },
  },
  {
    name: "Agarwal",
    age: 200,
    place: "Gomia",
    children: ["react", "next", "tailwind", "bootstrap", ["angular"]],
  },
];

console.log(ar1[0].child1.place);
console.log(ar1[0].child1.Childskills[2][0]);

// FOREACH
// for eacn value will accept 3 arrgument :current value, index and whole array
// current value is mandatory and rest are optional
let a = ["apple", "mango", "banana"];
a.forEach((c, i, w) => {
  //we can pass any name inside the argument but the sequesnce of the  function will be same
  console.log(c, c.length);
  console.log(i);
  console.log(w);
});

// foreach will not return anything it is only for showing or fetteching array
a.forEach((c, i, w) => {
  console.log(c.toUpperCase());
});

let num = [100, 200, 300];
num.forEach((c) => {
  console.log(c + 10);
});

a.forEach((c, i, w) => {
  console.log(c[0].toUpperCase() + c.slice(1));
});
a.forEach((c, i, w) => {
  console.log(c + "    ", "100 RS");
});
