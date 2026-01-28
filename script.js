/* 
There is a html file in which there is s body tag and in that we connect html file to js file as
<script src=””script.js></script>

In script.js file:
Document.writeln(“I am  ankesh”)
it is used to write text  in html page 
Let myname = "ankesh"

document.writeln("i am " + myname + <br/>)

*/
//calculator
let num1 =80
let num2 =12

document.writeln("addition of 2 numbers: " +(num1+num2) +"<br>")
document.writeln("substraction of 2 numbers: " +(num1-num2) +"<br>")
document.writeln("multiplication of 2 numbers: " +num1*num2 +"<br>")
document.writeln("division of 2 numbers: " +num1/num2 +"<br>")



//arrays
let myarray = ["abhi", "amy", "bro", "shri"];
console.log(myarray)
console.log(myarray[1])
console.log(myarray[2])
document.writeln(myarray)


//objects
let myobj = {
    name : "ankesh",
    age : 22,
    education : "B Tech"
}

document.writeln(myobj.name)
document.writeln(myobj.age)

document.writeln("<br>")

//function
function dish() {
    console.log("1. Put on heat")
    console.log("2. add panner")
    console.log("3. add masala")
    console.log("4. serve it")
}
dish()

function dynamic_dish(ingredients) {
    console.log("1. Put on heat")
    console.log("2. add " + ingredients)
    console.log("3. add masala")
    console.log("4. serve it")
}
dynamic_dish("aloo")


let student = {
    maths: 100,
    english: 80,
    physics:90
}

let student2 = {
    maths: 80,
    english: 90,
    physics:95
}

function calculateTotal(obj){
    console.log(obj.maths + obj.english + obj.physics)
}

calculateTotal(student)
calculateTotal(student2)




// apis
// we use async so that if we want to dowload then it donot stop the process and run in backgrond
async function getuser(){
    //await is used because the download will take time
    let responce = await fetch("https://jsonplaceholder.typicode.com/users")
    //format the responce(as the data is in unreadable form)
    //as conversion needs time
    let converted = await responce.json()
    console.log(converted)
    console.log(converted[0])
    document.writeln(converted)//!!!!!!!
    document.writeln(converted[0].name)
    document.writeln(converted[0].company.name)
}

getuser()



/*



*/