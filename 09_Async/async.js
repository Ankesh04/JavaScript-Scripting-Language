// ASYNC FUNCTION
//async & await keyword


// ASYNC KEYWORD
// creates an async function and return a promise by default
async function grret(){
    return "hello world";///returns a promise
}



grret()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result was :", result);
    })
    .catch((err) =>{
        console.log("promise was rejected with err :", err);
    })


let demo = async () =>{
    return 5;
}; //return a promise


