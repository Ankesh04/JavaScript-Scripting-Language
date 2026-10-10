let maindiv = document.createElement("div");
document.body.append(maindiv);

async function getData() {
  let data = await fetch("https://dummyjson.com/products");
  let finalData = await data.json();
  //   here finaldata will be a object which is converted by data.json

  finalData.products.forEach((c) => {
    maindiv.innerHTML += `
    <div>
        <img src="${c.images[0]}" class="img-card">
        <h3>${c.title}</h3>
    </div>
    `;
  });
}

getData();
