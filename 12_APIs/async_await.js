let url = "https://catfact.ninja/fact";

async function getFacts() {
    let res = fetch(url);
    console.log(res);
}

//here the console.log() will be printed but the api response will be undefined 
// as js works asynchonous so it doesnot wait

async function getFacts() {
    let res = await fetch(url);//here it will wait until the response will come from the api
    let data = await res.json();
    console.log(res);
    console.log(data.fact);
}

// error mai come so we will use try and catch

async function getFacts() {
    try{
        let res = await fetch(url);//here it will wait until the response will come from the api
        let data = await res.json();
        console.log(res);
        console.log(data.fact);
    }
    catch(e) {
        console.log(e)
    }
}