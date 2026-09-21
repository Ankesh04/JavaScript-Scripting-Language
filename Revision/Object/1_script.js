// OBJECT

let obj = {
  name: "ankesh",
  age: 22,
  place: "jharkhand",
  course: "MERN",
};

// console.log(obj);
// console.log(obj.name);
// console.log(obj["age"]);

// obj.place = "Banglore";
// console.log(obj);

// obj.qualification = "B. Tech";
// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// let ar = Object.entries(obj);
// console.log(ar);

// console.log(Object.fromEntries(ar));

// // diectly you can not change key
// // convert to array , change, convert to object

// let arr_obj = Object.entries(obj);
// console.log(arr_obj);
// console.log((arr_obj[0][0] = "UserName"));
// console.log(arr_obj);
// let obj2 = Object.fromEntries(arr_obj);
// console.log(obj2);
// console.log(delete obj.qualification);
// console.log(obj);

// // if we seal the object then we can edit the property but we cannot add new property
// Object.seal(obj);
// obj.skills = "Bowler";
// obj.age = 21;
// console.log(obj);
// console.log(Object.isSealed(obj));
// //if we freez the object then we cannot edit or add property
// Object.freeze(obj);
// obj.skills = "Bowler";
// obj.age = 21;
// console.log(obj);
// console.log(Object.isFrozen(obj));

// // DESRTUCTURING
// let { name, age, place, course } = obj;
// console.log(name);
// console.log(course);
// console.log(place);
// console.log(age);
// // in destructuring in object we donot have to put random variable instead we have to write particular or exact name
// // if we need only name and place then we can use that two variable names only

// let { name: firstName, age: myAge } = obj;
// console.log(firstName);
// console.log(myAge);
// // nested object desruturing
let obj1 = {
  name: "ankesh",
  age: 22,
  place: "jharkhand",
  course: {
    mern: "javascript",
    java: "springboot",
  },
};

// let { mern, java } = obj1.course;

// console.log(mern);
// console.log(java);

// let a = {
//   name: "Ankesh",
//   age: 22,
//   place: "India",
// };

// function sentence({ name, age, place }) {
//   console.log(`I am ${name}.`);
//   console.log(`I am from ${place}.`);
// }

// sentence(a);

// function sentence1({ ...a1 }) {
//   console.log(a1);
// }
// sentence1(a);
//rest operator(...)is used to coollect the values from the object

console.log(obj1.course.mern);

let { mern, ...s } = obj1.course;
console.log(s.java);

// SPREAD
// spread operator is used to expand the values of an object
// we can store more values in the array with the spread operator
// in one execution only one rest parameter can be used but we can use multiple spread operator

let new_obj = { ...obj1 };
console.log(new_obj);
let n1ew_obj = { ...obj1, company: "qspiders" };
console.log(n1ew_obj);

let obj2 = {
  name: "Agarwal",
  age: 22,
  place: "Haryana",
  course: {
    mern: "javascript",
    java: "springboot",
  },
};

let new_objj = {
  ...obj1,
  ...obj2,
};
console.log(new_objj);
// there are similar keys so the latest one executed will be displayed means last object keys will be displayed
