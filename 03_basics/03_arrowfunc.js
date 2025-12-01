const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()    hitesh, welcome to website
// user.username = "sam"
// user.welcomeMessage()    sam, welcome to website

// console.log(this);       {}
// browser ke ander ke global object ko window bola jata hai and terminal ke andar ko node bola jata hai

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);      undefined
// }



//************arrow function*************** */
const chai =  () => {       //just function ke jagha =>
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2          explicit return
// }
//if curly braces are used then we have to use return keyword but if small barckets are used we donot have to
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )   implicit return

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()