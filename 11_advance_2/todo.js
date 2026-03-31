let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let li= document.querySelector("li");

btn.addEventListener('click', function(e){
    let item = document.createElement("li");//created list item to add in unoderlist
    item.innerHTML = inp.value;
    // ul.appendChild(item);//added the list item in the unodered list
    //to add delete button in every added task
    let delbtn  = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList = "delete";
    //created delete button
    // to add in the every task that is added
    item.appendChild(delbtn)
    ul.appendChild(item)
    inp.value = '';

})

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
    
})

// let delBtns = document.querySelectorAll(".delete");
// for (delbtn of delBtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }
//the event listers are used for the preexisting elemets in the page
//if the same type of element is created then the event listner will not work
//so we use EVENT DELEGATION(event bubbling)