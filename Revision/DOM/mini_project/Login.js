let login = document.getElementById("LoginForm");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email == "" || password == "") {
    alert("Please enter the details");
  }

  let data = localStorage.getItem("userData");
  let userDetails = JSON.parse(data);

  if (userDetails.email == email && userDetails.password == password) {
    alert("Login Successful");
    window.location.href = "./Home.html";
  }
});
