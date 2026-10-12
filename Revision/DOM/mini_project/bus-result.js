let searchData = localStorage.getItem("tripDetails");

let searchDetails = JSON.parse(searchData);

// console.log(searchDetails)
if (searchData == null) {
  alert("Please fill the form");
  window.location.href = "./Home.html";
}

let route = document.getElementById("route");

let date = document.getElementById("date");

route.textContent = `${searchDetails.from} ⇨ ${searchDetails.to}`;

date.textContent = `${searchDetails.date}`;
