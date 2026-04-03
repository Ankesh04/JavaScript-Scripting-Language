// DESTRUCTURING
//storing values of array into multiple variables

let names  =["tony", "bruce", "steve", "peter"]
let [winner, runnerup] = names;
console.log(winner, runnerup); //"tony"  "bruce"
console.log(winner, runnerup, ...others);//in the others the rest of the elements will be storred 

//objects in desucturing
const student ={
    name : "ankesh",
    age:23,
    eng:90,
    math:98,
    phy: 91

};
let {math, phys} = student;
// 98,91
let {math:mathScore, phys:physicsScore} = student;
//98,91
// 98,91
let {math:math1Score, phys:physics1Score, city = "jharkhand"} = student;
//default value
// example