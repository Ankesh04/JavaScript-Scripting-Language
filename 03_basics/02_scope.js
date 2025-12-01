//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}


//{} curly braces is the scope
// console.log(a);
// console.log(b);
// console.log(c);
//if var variable type is in the scope then it will be printed outside the scope which is wrong that is why we donot use var mostly

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){                   //here we have simple declared a function so it can be accesed if we call before the declaration
    return num + 1
}



addTwo(5)
const addTwo = function(num){           //but here we have declared a function and also hold it so here error comes
    return num + 2
}