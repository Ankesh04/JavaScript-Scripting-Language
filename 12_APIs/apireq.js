// using fetch
// fetch(url)
let url = "https://catfact.ninja/fact";

fetch(url)//donot use semicolon here
// this returns a promise 
// so we can use then and catch
.then((res) => {
    console.log(res);
    res.json().then((data) => {
        console.log(data);//this make the response readable
    })
})
.catch((err) =>{
    console.log(err);
})


// channing
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err) =>{
    console.log(err);
})

// getting any particular fact
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data.fact);//here
})
.catch((err) =>{
    console.log(err);
})


