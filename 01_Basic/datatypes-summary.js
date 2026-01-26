//  Primitive(call by value)

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')    
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)(call by reference)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);      //symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3

//********************************************** 

// Stack (Primitive), Heap (Non-primitive)
// whenever stack memory is used the variable declared by you , you get copy of it
// whenever any variable is in heap memory then you get reference (original value)

let myYoutubename = "Dazzido"

let anotherName = myYoutubename
anotherName = "Dazzido x"

console.log(myYoutubename);     //Dazzido
console.log(anotherName);       //Dazzido x


let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
 
userTwo.email = "dazzido@gmail.com"

console.log(userOne.email);     //dazzido@gmail.com
console.log(userTwo.email);     //dazzido@gmail.com

//object heap memory me store hota hai to bhale do variable bane
//but dono ek hi value reference milta hai dono variable me se 
//koi bhi changes karege to value change ho jayega