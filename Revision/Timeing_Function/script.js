// SETTIMEOUT
// It is a timing function which is executed after some delay making the js unsynchronous

// console.log("Start");

// setTimeout(() => {
//   for (let i = 1; i <= 1000; i++) {
//     console.log("After  three second ");
//   }
// }, 3000);

// console.log("stop");

// SETINTERVAL
// It is timing fucntion which is used to print output at some particular dealy again and again

// setInterval(() => {
//   console.log("Hello there");
// }, 3000);

// since this setinterval has no breakage , it will be executed again and again

// CLEARINTERVAL
// it is used stop the setinterval timing fuction
// if we use it directly then setinterval will start and immidiatly it will be stoped
// so we use settimeout delay for that so after some interval or time it will delay

// let a = setInterval(() => {
//   console.log("Hello there");
// }, 3000);

// setTimeout(() => {
//   clearInterval(a);//we have to provide the variable for setinterval to call in the clearinterval
//   console.log("stoped after three interval");
// }, 9000);

// setTimeout(() => {
//   console.log("ORDER PLACED");
// }, 2000);
// setTimeout(() => {
//   console.log("Food is getting prepared");
// }, 4000);
// setTimeout(() => {
//   console.log("Food is getting packed");
// }, 6000);
// setTimeout(() => {
//   console.log("Food delivered succesfully");
// }, 8000);

// console.log("You have 5 sec for the payment");
// let a = setTimeout(() => {
//   console.log("Payement Succesfull");
// }, 5000);

// setTimeout(() => {
//   clearTimeout(a);
//   console.log("Payement Cancle before 2 sec");
// }, 3000);

// setInterval(() => {
//   console.log("saved succesfull");
// }, 2000);

// let div = document.createElement("div");
// document.body.append(div);

let image = ["./admin-dashboard.png", "./admin-packages.png", "./contact.png"];
let index = 0;
setInterval(() => {
  div.innerHTML = `<img src="${image[index]}">`;
  index++;

  if (index === 3) {
    index = 0;
  }
}, 2000);
