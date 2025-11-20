// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
//console.log(myArr)  it will give all the elements in the array no loop needed
// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)     add item in the first but not used because it put much load if length of the array is very large
// myArr.shift()        remove the first element in the array

// console.log(myArr.includes(9));      false
// console.log(myArr.indexOf(3));       3 and if the value is not there then the output will come -1

// const newArr = myArr.join()      it binds the array and convert it into string

// console.log(myArr);          [0,1,2,3,4,5]
// console.log( newArr);        012345


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)   // it remove the element from the array
console.log("C ", myArr);
console.log(myn2);