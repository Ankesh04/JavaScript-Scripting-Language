// PROMISES
// Promises are the object that are use to run javascript assynchornously
// It has three states : 1. FULFIELD, 2. REJECTED, 3. PENDING

// let p = new Promise((res, rej) => {
//   let pizza = false;
//   if (pizza) {
//     res("I got the pizza");
//   } else {
//     rej("Pizza got cancled");
//   }
// });
// console.log(p);

// let username = prompt("Enter your username:");
// let paswd = prompt("Enter the password:");

// let c = new Promise((res, rej) => {
//   if (username == "ankesh" && paswd == "dazzido") {
//     res("Login succesful");
//   } else {
//     rej("Wrong Username or Password:Login failed");
//   }
// });
// console.log(c);

// let citizenship = prompt("Enter your citizenship:");
// if (citizenship === "INDIA") {
//   let age = Number(prompt("Enter your age:"));
//   let c = new Promise((res, rej) => {
//     if (age >= 18) {
//       res("Eligible for vote");
//     } else {
//       rej("Not Eligible for vote"); // we get error here with the "Not Eligible for vote"
//     }
//   });
//   console.log(c);
// }

// For handelling the error we use THEN CATCH FINALLY
// THEN
// it is used to print if the condition is fulfield
// CATCH
// it is used to print if the condition is rejected
// FINALLY
// it is used to print and it doesnot depend on the condition

// let citizenship = prompt("Enter your citizenship:");
// if (citizenship === "INDIA") {
//   let age = Number(prompt("Enter your age:"));
//   let c = new Promise((res, rej) => {
//     if (age >= 18) {
//       res("Eligible for vote");
//     } else {
//       rej("Not Eligible for vote"); // we get error here with the "Not Eligible for vote"
//     }
//   });

//   c.then((res) => {
//     console.log(res);
//   });
//   c.catch((res) => {
//     console.log(rej);
//   });
//   c.finally(() => {
//     console.log("NIce talking to you");
//   });
// }

// let a = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Hello");
//   }, 2000);
// });

// a.then((res) => {
//   console.log(res);
// }).catch((rej) => {
//   console.log(rej);
// });

// function login(name, password) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (name === "ank" && password === 123) {
//         res("login successfull");
//       } else {
//         rej("login failed");
//       }
//     }, 2000);
//   });
// }

// login("ank", 123)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err); //you can pass any parameter
//   });

// JSON
// Javascript object notation
// Browser only understand json file but javascript understand javascript object
// so to convert object to json we use JSON.stringify
// so to convert json to object we use JSON.parse

// let obj = {
//   name: "ankesh",
//   age: 22,
// };
// console.log(obj);
// let j_son = JSON.stringify(obj);
// console.log(j_son);
// let p = JSON.parse(j_son);
// console.log(p);

// FETCH
// fetch("https://fakestoreapi.com/products") //if we print this it will return a promise
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     console.log(response);
//   });
// fetch("https://fakestoreapi.com/products") //if we print this it will return a promise
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     let a = response.filter((c) => {
//       return c.price > 100;
//     });
//     console.log(a);
//   });

// let ar = [
//   { name: "febin", age: 21 },
//   { name: "bhaskar", age: 30 },
//   { name: "Nadeem", age: 32 },
//   { name: "Ankesh", age: 22 },
// ];

// let c = ar.filter((s) => {
//   return s.age > 21;
// });
// console.log(c);

// fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     let d = response.filter((c) => {
//       console.log(c);
//       return c.title;

//       //   return c.title.startsWith("A");
//     });
//     console.log(d);
//   });

// fetch("https://dummyjson.com/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.products[0].title);
//     data.products.forEach((c) => {
//       console.log(c.title);
//     });
//   });

// fetch("https://dummyjson.com/carts")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     let a = data.carts.filter((c) => {
//       return c.products[0].price;
//     });
//     console.log(a);
//   });

// fetch("https://dummyjson.com/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.products);

//     let total = data.products.filter((c) => {
//       return c.price > 10;
//     });
//     return total;
//   })
//   .then((total) => {
//     let price = total.map((c) => {
//       return c.price;
//     });
//     console.log(price);
//     let a = price.reduce((ac, c) => {
//       return ac + c;
//     }, 0);
//     console.log(a);
//   });

// async function getdata() {
//   let data = await fetch("https://dummyjson.com/products");
//   let fetchedData = await data.json();
//   console.log(fetchedData);
//   fetchedData.products.forEach((c) => {
//     console.log(c.title);
//   });
// }
// getdata();
async function getdata() {
  let data = await fetch("https://dummyjson.com/users");
  let fetchedData = await data.json();
  console.log(fetchedData);
  fetchedData.users.forEach((c) => {
    console.log(c.firstName, c.lastName);
    console.log(
      `
      My name is ${c.firstName}.
      My eye color is ${c.eyeColor}.
      My hair color is ${c.hair.color}
      `,
    );
  });
}
getdata();
