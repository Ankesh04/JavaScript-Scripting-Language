const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)     here nested arrays are formed 
//for marvel_heros d_heros is a single element
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   add the another array and output in the new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]    //spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)         // remove nested array and add all the elemets in the new array
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))    //false
console.log(Array.from("Hitesh")) //['h','i','t','e','s','h']
console.log(Array.from({name: "hitesh"})) // interesting
//here it coloud not able to define if you wants arrays of key or value so it will return []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));      //return a new array from a set of elements