// let btn = document.getElementById("btn");

// btn.addEventListener('keypress', ()=>{
//     // console.log("button clicked");
//     document.body.style.backgroundColor = "blue";

// })

// let input = document.getElementById("input");

// input.addEventListener('keyup', (event)=>{
//     // console.log(event.target);
//     // console.log(event.key);
//     // console.log(event.target.value);

//     // if(event.key=='a'){
//     //     console.log("a pressed");
//     // }

//     console.log(event.code);
// })

// let a = document.getElementById("first");
// let btn1 = document.createElement("button")
// btn1.textContent = "submit";

// btn1.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "black";
//     document.body.classList.add("bodycolor");

// })

// let btn2 = document.createElement("button")
// btn2.textContent = "submit";
// btn2.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = "brown";
//     document.body.classList.remove("bodycolor");
// })
// a.append(btn1,btn2);

// let btn3 = document.createElement("button")
// btn3.textContent = "submit";
// btn3.addEventListener('click', ()=>{
//     document.body.classList.toggle('bodycolor');
// })

// let sec = document.getElementById("second");
// let h = document.createElement("h1");
// let btn = document.createElement("button");
// btn.textContent = "submit";
// sec.append(btn);
// btn.addEventListener('click', ()=>{
//     sec.append(h);
//     h.textContent = "welcome to my page";
// })

// let sec = document.getElementById("second");
// let h = document.createElement("h1");
// h.textContent = 0;
// let count=0;
// let btn1 = document.createElement("button");
// btn1.textContent = "increment";
// btn1.addEventListener('click', ()=>{
//     count++;
//     h.textContent=count;
// })
// let btn2 = document.createElement("button");
// btn2.textContent = "decrement";
// btn2.addEventListener('click', ()=>{
//     count--;
//     h.textContent=count;
// })
// let btn3 = document.createElement("button");
// btn3.textContent = "reset";
// btn3.addEventListener('click', ()=>{
//     count=0;
//     h.textContent = 0;
// })
// sec.append(h,btn1,btn2,btn3);

// let form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault(); //to prevent the reload after submiting
//   console.log("form got submited");
// });

// let name = document.getElementById("name");
// name.addEventListener("focus", () => {
//   //focus means when we click on the input field
//   name.style.border = "5px solid green";
// });

// name.addEventListener("blur", () => {
//   //blur when we leave the input field
//   name.style.border = "5px solid red";
// });

// // when user write in input field it get displayed in real time
// // name.addEventListener("input", (e) => {
// //   console.log(e.target.value);
// // });
// // after user complete writing in input field and get out of the input field it get displayed
// name.addEventListener("change", (e) => {
//   console.log(e.target.value);
// });

localStorage.setItem("name", "Ankesh");
localStorage.setItem("age", "22");
localStorage.setItem("contact", "8210833856");

// localStorage.removeItem("name");
// localStorage.clear();

let a = localStorage.getItem("name");
console.log(a);

let key = localStorage.key(0);
console.log(key);

let obj = {
  name: "Ankesh",
  age: 22,
  place: "Jharkhand",
};
localStorage.setItem("userdetails", JSON.stringify(obj)); //convert to json to store in local storage

let data = localStorage.getItem("userdetails");
console.log(data);
console.log(JSON.parse(data)); //to use the data from the local storage covert it into object to use in javascript

let a1 = [10, 20, 30, 40];
console.log(a1);
localStorage.setItem("price", a1.join(" "));
let price = localStorage.getItem("price");
console.log(price.split(" "));

localStorage.setItem("array", a1);
let ar = localStorage.getItem("array");
console.log(ar.split(","));

// in local Storage data will be stored even if tab is closed but in session storage the data will be deleted when the tab is closed
sessionStorage.setItem("name", "ankesh");
// and all goes same as localStorage methods
let c = sessionStorage.getItem("name");
console.log(c);

// for(let i=0;)
