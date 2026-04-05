let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () =>{//we made this async function it shoul wait for the response
    let link = await getImage();
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
})


async function getImage() {
    try{
        let res = await axios.get(url);//here it will wait until the response will come from the api
        console.log(res);//no need of parse
        console.log(res.data.message);
        return res.data.message;
    }
    catch(e) {
        console.log(e)
        return "no image found"
    }
}