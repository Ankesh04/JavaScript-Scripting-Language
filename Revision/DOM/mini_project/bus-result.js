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

async function getdata() {
  let data = await fetch("./busdata.json");
  let bus_data = await data.json();
  console.log(bus_data);
}

let filter_buses = bus_data.filter((bus) => {
  return (
    searchDetails.from.toLowerCase() === bus.departure.toLowerCase() &&
    searchDetails.to.toLowerCase() === bus.arrival.toLowerCase()
  );
});

console.log(filter_buses);
if (filter_buses == 0) {
  busContainer.innerHTML = `
  <div>
    <h3>Number of buses are available</h3>
    <p>From ${searchDetails.from} to ${searchDetails.to}</p>
    <p>Please Modify your search and try again</p>
  </div>
  `;
}

filter_buses.forEach((buses) => {
  let buscard = document.createElement("div");
  buscard.classList.add("bus_card");
  buscard.innerHTML += `
  <div>
    <h3>${buses.operator}</h3>
    <p>${buses.busType}</p>
  </div>

  <div>
    <p>Departure ${buses.departure_time} --> Arival ${buses.arrival_time}</p>
  </div>
  <div>
    <h3>Price ${buses.price}</h3>
  </div>

  <button class="select-seat">Click</button>
  `;
  busContainer.apend(buscard);

  let selectseatbutton = buscard.querySelector(".select-seat");
  selectseatbutton.add;
});
