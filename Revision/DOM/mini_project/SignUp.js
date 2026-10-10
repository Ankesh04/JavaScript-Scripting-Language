let signup = document.getElementById("SignUpForm");

signup.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirm").value;

  if (name == "" || email == "" || password == "" || confirmpassword == "") {
    alert("Please fill the from");
  }

  if (password != confirmpassword) {
    alert("Password is not matching");
  }

  let userDetails = {
    name: name,
    email: email,
    password: password,
  };
  let data = JSON.stringify(userDetails);

  localStorage.setItem("userData", data);

  window.location.href = "./Login.html";
});
