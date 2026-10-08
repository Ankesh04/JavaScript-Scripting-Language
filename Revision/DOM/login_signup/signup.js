let signup = document.getElementById("signUpform");

signup.addEventListener("submit", (e) => {
  e.preventDefault();
});

//.value is used to get the value entered in the input field
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let cnfrmpass = document.getElementById("cnfrmpass").value;

if (name == "" || email == "" || password == "" || cnfrmpass == "") {
  alert("Please fill the form");
}

if (password != cnfrmpass) {
  alert("Password is not matching");
}

let userDetails = {
  name: name,
  email: email,
  password: password,
};
let data = JSON.stringify(userDetails);

localStorage.setItem("userData", data);

// window.location.href = "./login.html";
