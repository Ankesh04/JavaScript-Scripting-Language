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

let citizenship = prompt("Enter your citizenship:");
if (citizenship === "INDIA") {
  let age = Number(prompt("Enter your age:"));
  let c = new Promise((res, rej) => {
    if (age >= 18) {
      res("Eligible for vote");
    } else {
      rej("Not Eligible for vote"); // we get error here with the "Not Eligible for vote"
    }
  });

  c.then((res) => {
    console.log(res);
  });
  c.catch((res) => {
    console.log(rej);
  });
  c.finally(() => {
    console.log("NIce talking to you");
  });
}
