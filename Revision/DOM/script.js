// DOM
// It is an api with which we can manupulate html elements

// document.getElementById("ID_NAME")
// it will select the particular element  which enclude this id
let a = document.getElementById("hid");
console.log(a);
// output-<h1 id="hid">How are you my friend.</h1>

// textContent
// it is used to change the element content
a.textContent = "AAgaye meri mot ka tamasa dekhne";

// if we want to print the element content in console then we also use textCOntent

console.log(a.textContent);

// document.getElementByClassName("class_name")
// it will select the all element  which enclude this class name

let as = document.getElementsByClassName("cls"); //here Elements is there to select multiple elemenet
console.log(as);
// it will select all the eleemnt with this class name
console.log(as[0].textContent);
console.log(as[1].textContent);
console.log(as[2].textContent);
// to print we have to use indexes

// getElementByTagName("tag_name")
// // it will select the all element  which enclude this tag name

let p = document.getElementsByTagName("p");
console.log(p);

// document.querySelector("Tag_name or class_name or id_name")
// it will select first matching element
let c = document.querySelector(".cls");
let c1 = document.querySelector("p");
let c2 = document.querySelector("#hid");
console.log(c, c1, c2);

// document.querySelectorAll("Tag_name or class_name or id_name")
// it will select all matching element
let d = document.querySelectorAll(".cls");
let d1 = document.querySelectorAll("p");
let d2 = document.querySelectorAll("#hid");
console.log(d, d1, d2);

// to change css
a.style.backgroundColor = "blue";
a.style.height = "100px";
a.style.width = "900px";

// createElement("tag_name")
// it will create a tag in html but now it will not be visible
let h1 = document.createElement("h1");
h1.textContent = "Kyu hila dala na";
// now also it is not visible as it is not added in html
document.body.append(h1);

// to create element inside element
let div1 = document.createElement("div");
document.body.append(div1);

div1.style.height = "100px";
div1.style.width = "900px";
div1.style.backgroundColor = "red";

let btn = document.createElement("button");
btn.textContent = "SUBMIT";
div1.append(btn);

// classList.add("class_name")
// to provide class name for elements
div1.classList.add("btn1");
// to remove class name for element
div1.classList.remove("btn1");

// setAttribute("id", "id_name")
// to create a attribute
btn.setAttribute("id", "btn_main");
// to remove a attribute
btn.removeAttribute("id", "btn_main");

let image = document.createElement("img");
btn.append(image);

image.setAttribute("src", "../Timeing_Function/contact.png");
image.style.height = "50px";
kopjiojbhjinjj