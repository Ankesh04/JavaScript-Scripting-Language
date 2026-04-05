// AXIOS
// library to make http requests
// why axios is been used
// as when the response comes from the fetch it was in readable form but
// not properly in json format so we have to parse that data
// in axios we direct get json formated data



let btn = document.querySelector("button");

btn.addEventListener("click", async () =>{//we made this async function it shoul wait for the response
    let fact =  await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerHTML = fact;


})
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res = await axios.get(url);//here it will wait until the response will come from the api
        console.log(res);//no need of parse
        console.log(res.data.fact);
        return res.data.fact;
    }
    catch(e) {
        console.log(e)
        return "no fact found"
    }
}