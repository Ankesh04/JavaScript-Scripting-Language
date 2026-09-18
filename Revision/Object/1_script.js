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
// let obj1 = {
//   name: "ankesh",
//   age: 22,
//   place: "jharkhand",
//   course: {
//     mern: "javascript",
//     java: "springboot",
//   },
// };

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
