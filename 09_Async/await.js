// AWAIT KEYWORD
// pause the execution of its surrounding async fucntion until the promise is settled(resolved or rejected)
// basically pending nahi rahe

const { reduce } = require("async");

function getNum() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let num = Math.floor(Math.random() * 10)+1;
            console.log(num);
            resolve();
        }, 1000);
        
    });
}

async function demo() {
    // getNum();
    // getNum();
    // getNum();
    //here if we call like this the random  umber will be generated after 1 sec all three at once
    //but we want 1 after another
    //therefore we use wait keyword
    await getNum();
    await getNum();
    getNum();
}

// change color 
h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color change to ${color}!`);
            resolve("color change");
        }, delay);
    })
}

async function demo() {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
    await changeColor("blue", 1000);
    let a =5;
    console.log(a);
    console.log("new Number =" , a+3);
}



// HANDLING REJECTION WITH AWAIT
// if the seconf callback have some error the the rest of the callback will not continue
async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        changeColor("blue", 1000);
    }
    catch (err0){
        console.log("error caught :");
        console.log(err);
    }
    let a =5;
    console.log(a);
    console.log("new Number =" , a+3);
}

// example output
// color cahnged to red 
// error caught 
// promise rejected
// 5
// new number = 8
