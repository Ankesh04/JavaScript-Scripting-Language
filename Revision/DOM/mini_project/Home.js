let details = document.getElementById("details");

details.addEventListener("submit", (e) => {
  e.preventDefault();

  let from = document.getElementById("from").value.trim();
  let to = document.getElementById("to").value.trim();
  let date = document.getElementById("date").value;

  // console.log(from , to , date)

  if (from == "" || to == "" || date == "") {
    alert("Enter all the details");
  }

  let details = {
    from: from,
    to: to,
    date: date,
  };

  let data = JSON.stringify(details);

  localStorage.setItem("tripDetails", data);
  window.location.href = "./bus-result.html";
});

localStorage.setItem("id", "ankesh");
