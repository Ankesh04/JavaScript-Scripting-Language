let obj = {
  email: "ankeshagarwal44@gmail.com",
  password: "ankesh1234",
};
localStorage.setItem("userdetails", JSON.stringify(obj));

let data = localStorage.getItem("userdetails");
let userdetails = JSON.parse(data);

let login = document.getElementById("LoginForm");

login.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email == "" || password == "") {
    alert("Please enter the details");
  }

  //   localStorage.setItem("email", email);
  //   localStorage.setItem("password", password);
  //   let a = localStorage.getItem("email");
  //   let b = localStorage.getItem("password");
  //   console.log(a, b);

  if (userdetails.email == email && userdetails.password == password) {
    alert("Login Successful");
    console.log("login succesfull");
  } else {
    alert("wrong email or password");
  }
});
