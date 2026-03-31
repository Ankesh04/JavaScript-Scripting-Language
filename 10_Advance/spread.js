/*
SPREAD
expands an iterable into multiples vlaues
*/ 

function fucn (...arr){
    //do something
}

let arr=[1,2,1,1,3,3,1,3,1]
let arr2 = [1,3,5,6,6,7,6]
console.log(...arr, ...arr2);
//1 2 1 1 3 3 1 3 1 1 3 4 6 6 7 6

let chars = [..."hello"];
console.log(chars);
// h e l l o

const data = {
    email: "ankeshagarwal444@gmail.com",
    pswd: "abcd"
};

const dataCopy = {...data};
console.log(dataCopy)
//{email: "ankeshagarwal444@gmail.com", pswd: "abcd"}

let arr3 = [1,2,3,4]
let object = {...arr3}
console.log(object);
//{0:1, 1:2, 2:3, 3:4}  the index places of arr becomes key of the values of the array in the objects

// REST
// Allows a function to take an indefinite umber of arguments and budle them in an Array
function sun(...args){
    return args.reduce((add,el) => add + el);
}
//just opposite of spread

function add(...args){
    for (let i=0; i <args.length; i++){
        console.log("You gave us :",args[i]);
    }
}

//add(1,2,3)
// you gave us 1
// you gave us 2
// you gave us 3