// OBJECT

let obj = {
  name: "ankesh",
  age: 22,
  place: "jharkhand",
  course: "MERN",
};

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);

obj.place = "Banglore";
console.log(obj);

obj.qualification = "B. Tech";
console.log(obj);

console.log(Object.keys(obj));
console.log(Object.values(obj));

let ar = Object.entries(obj);
console.log(ar);

console.log(Object.fromEntries(ar));

// diectly you can not change key
// convert to array , change, convert to object

let arr_obj = Object.entries(obj);
console.log(arr_obj);
console.log((arr_obj[0][0] = "UserName"));
console.log(arr_obj);
let obj2 = Object.fromEntries(arr_obj);
console.log(obj2);
console.log(delete obj.qualification);
console.log(obj);

// if we seal the object then we can edit the property but we cannot add new property
Object.seal(obj);
obj.skills = "Bowler";
obj.age = 21;
console.log(obj);
console.log(Object.isSealed(obj));
//if we freez the object then we cannot edit or add property
Object.freeze(obj);
obj.skills = "Bowler";
obj.age = 21;
console.log(obj);
console.log(Object.isFrozen(obj));
