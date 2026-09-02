// console.log("Good morning");
// //clg shorcut for console.log()
// var a;
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
// //VAR
// a = 20;
// var a = 30;
// console.log(a);

// //LET
// let k;
// // let k //X cannot be redeclared
// k = 10;
// k = 20;
// // let k = 30 X
// console.log(k);

// //CONST
// // const a  cannot be only declared
// const d = 10;
// // const d cannot be re declared if done before
// //  d=20 cannot be re initialised
// // const d =30  cannot be re decalred and reinitialised
// console.log(d);

//TYPECASTING
// implicit
// let s = 10;
// let h = "20";
// console.log(s + h);
// console.log(s - h);
// console.log(s * h);
// console.log(s * h);
// console.log(h / s);
// //explicit
// let f = "25";
// let ab = Number(f);
// console.log(ab);
// console.log(typeof ab);

// to take value from user
// let age = Number(prompt("Enter the age:"));
// console.log(age);

// //Arithematic Operqator
// let num1 = Number(prompt("Enter the First number:"));
// let num2 = Number(prompt("Enter the Second number:"));
// let addition = num1 + num2;
// let difference = num1 - num2;
// let product = num1 * num2;
// let division = num1 / num2;
// let reminder = num1 % num2;
// let power = num1 ** num2;
// console.log("The addition =", addition);
// console.log("The difference =", difference);
// console.log("The product =", product);
// console.log("The devision = ", division);
// console.log("The reminder =", reminder);
// console.log("The power product =", power);

// Comparision operator
// console.log(10 <= 10);
// console.log(10 == 10);
// console.log(10 == "10");
// console.log(10 == "100");
// console.log("qwd", 10 !== "10"); //check the data type which is not true
// console.log("qdwd", 10 !== "100"); //check the data type which is not true
// console.log(10 === 10);
// console.log(10 === "10");

//comparision operator
// let a = 25;
// let b = 20000;
// console.log(a > 18 && b > 25000);
// console.log((a > 18 && b < 25000) || age === 30);

// let username = "admin";
// let pswd = "123";
// console.log(username == "admin" || pswd !== "123");

// // assignment operator

// console.log((a = a + 20));
// console.log((a += 30));
// console.log(a);
// console.log((a -= 30));
// console.log((a /= 5));
// console.log((a *= 9));
// console.log((a %= 17));
// console.log(typeof username);

// //ternairy operator
// // conditiom?truestatement:falsestatement
// a > 0 ? console.log("Positive") : console.log("Negative");

// //Conditional statements
// let age = Number(prompt("Enter your age:"));
// if (age > 25) {
//   console.log("Eligible for marraige");
// } else {
//   console.log("Not eligible for marraige");
// }
// //*********** */
// let vote_age = Number(prompt("Enter your age:"));
// if (vote_age >= 18) {
//   console.log("Eligible for Vote.");
// } else {
//   console.log("Not eligible for Vote.");
// }
// //******** */
// let num1 = Number(prompt("Enter the number:"));
// if (num1 % 2 == 0) {
//   console.log("The number is even.");
// } else {
//   console.log("The number is odd.");
// }
// let username = prompt("Enter your username:");
// let paswd = prompt("Enter the password:");
// if (username == "ankesh" && paswd == "dazzido") {
//   console.log("Login succesful");
// } else {
//   console.log("Wrong Username or Password:Login failed");
// }

// if (username == "ankesh") {
//   if (paswd == "dazzido") {
//     console.log("Login succesful");
//   } else {
//     console.log("Wrong Password:Login failed");
//   }
// }else {
//     console.log("Wrong Username:Login failed");
//   }

// let num1 = prompt("Enter the number:");
// if (num1 % 3 == 0 && num1 % 5 == 0) {
//   console.log("The number is divisible by 3 & 5");
// } else {
//   console.log("The number is not divisible by 3 & 5");
// }

// let username = prompt("Enter your username:");
// let sum = Number(prompt("Enter the total of your product"));

// if (username == "ankesh" || username == "dazzido") {
//   if (sum > 5999) {
//     sum = sum + (sum * 15) / 100;
//     console.log("You are a member, Your final price :", sum);
//   } else {
//     console.log("Your total price is less than 6000, Your final price :", sum);
//   }
// } else {
//   console.log("You are not a member, Your final price :", sum);
// }

// let salary = Number(prompt("Enter your salary:"));
// if (salary > 30000) {
//   let c_score = Number(prompt("Enter your civil score"));
//   if (c_score > 700) {
//     console.log("You are eligibal");
//   } else {
//     console.log("you are not eligibal");
//   }
// } else {
//   console.log("Salary is low for eligibelity");
// }

// let char1 = prompt("Enter a letter to check the vowel");
// if (
//   char1 == "a" ||
//   char1 == "e" ||
//   char1 == "i" ||
//   char1 == "o" ||
//   char1 == "u" ||
//   char1 == "A" ||
//   char1 == "E" ||
//   char1 == "I" ||
//   char1 == "O" ||
//   char1 == "U"
// ) {
//   console.log("The letter is vowel.");
// } else {
//   console.log("The letter is not vowel");
// }

// let paid = true;
// let attendance = 89;
// if (true) {
//   if (attendance >= 75) {
//     console.log("Student is eligible");
//   } else {
//     console.log("Low attendance: Not eleigble");
//   }
// }

//else if

// let mark = Number(prompt("Enter the number"));
// if (mark > 100 || mark < 0) {
//   console.log("Invalid marks");
// } else if (mark >= 90) {
//   console.log("Grade A");
// } else if (mark >= 80) {
//   console.log("Grade B");
// } else if (mark >= 70) {
//   console.log("Grade C");
// } else {
//   console.log("Failed");
// }

// let temp = Number(prompt("Enter the Temperature"));
// if (temp > 50) {
//   console.log("Boiling Hot");
// } else if (temp >= 35) {
//   console.log("Too Hot");
// } else if (temp >= 25 && temp <= 34) {
//   console.log("Warm");
// } else {
//   console.log("Cold");
// }

// let salary = Number(prompt("Enter the salary"));
// if (salary >= 50000) {
//   bonus = salary + (salary * 5) / 100;
//   console.log("Your final salary is ", bonus);
// } else if (salary >= 40000) {
//   bonus = salary + (salary * 4) / 100;
//   console.log("Your final salary is ", bonus);
// } else if (salary >= 30000) {
//   bonus = salary + (salary * 3) / 100;
//   console.log("Your final salary is ", bonus);
// } else {
//   console.log("No bonus");
// }

// let num1 = Number(prompt("Enter the first Number"));
// let num2 = Number(prompt("Enter the second Number"));
// let operator1 = prompt("Enter the Opeartor(+,-,*,/,%,**:");
// if (operator1 == "+") {
//   console.log(`The addition of ${num1} and ${num2} is ${num1 + num2}`);
// } else if (operator1 == "-") {
//   console.log(`The substraction of ${num1} and ${num2} is ${num1 - num2}`);
// } else if (operator1 == "*") {
//   console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
// } else if (operator1 == "/") {
//   console.log(`The division of ${num1} and ${num2} is ${num1 / num2}`);
// } else if (operator1 == "%") {
//   console.log(`The reminder of ${num1} and ${num2} is ${num1 % num2}`);
// } else if (operator1 == "**") {
//   console.log(`The  product of ${num1} power ${num2} is ${num1 ** num2}`);
// } else {
//   console.log("Enter valid operator!");
// }

//SWITCH
// let day = Number(prompt("Enter the 1 to 7 to find the day"));
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednessday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Error:Enter between 1 to 7");
// }

// let num1 = Number(prompt("Enter the first Number"));
// let num2 = Number(prompt("Enter the second Number"));
// let operator = prompt("Enter the Opeartor(+,-,*,/,%,**:");
// switch (operator) {
//   case "+":
//     console.log(`The addition of ${num1} and ${num2} is ${num1 + num2}`);
//     break;
//   case "-":
//     console.log(`The substraction of ${num1} and ${num2} is ${num1 - num2}`);
//     break;
//   case "*":
//     console.log(`The product of ${num1} and ${num2} is ${num1 * num2}`);
//     break;
//   case "/":
//     console.log(`The division of ${num1} and ${num2} is ${num1 / num2}`);
//     break;
//   case "%":
//     console.log(`The reminder of ${num1} and ${num2} is ${num1 % num2}`);
//     break;
//   case "**":
//     console.log(`The  product of ${num1} power ${num2} is ${num1 ** num2}`);
//     break;
//   default:
//     console.log("Enter valid operator!");
// }

// let order = Number(
//   prompt(
//     // "Enter the order for the course of food:\n1 for Starter, 2 for Main course, 3 for Desert", or we can write for next line
//     `Enter the selection for the course of food:
//     1 for Starter,
//     2 for Main course,
//     3 for Desert`,
//   ),
// );
// switch (order) {
//   case 1:
//     console.log("For Starter we have: 1.Noodles, 2.Momos, 3.Baby corn chilli");
//     let starter = Number(prompt("Enter the order selection(1,2,3):"));
//     switch (starter) {
//       case 1:
//         console.log(`Your order, NOODLES is on the way`);
//         break;
//       case 2:
//         console.log(`Your order, MOMOS is on the way`);
//         break;
//       case 3:
//         console.log(`Your order, BABY CORN CHILLI is on the way`);
//         break;
//       default:
//         console.log(" Error:Enter valid number selection");
//     }
//     break;
//   case 2:
//     console.log("For Main course we have: 1.Curry panner, 2.Dosa, 3.Biryani");
//     let main = Number(prompt("Enter the order selection(1,2,3):"));
//     switch (main) {
//       case 1:
//         console.log(`Your order, CURRY PANNER is on the way`);
//         break;
//       case 2:
//         console.log(`Your order, DOSA is on the way`);
//         break;
//       case 3:
//         console.log(`Your order, BIRYANI is on the way`);
//         break;
//       default:
//         console.log(" Error:Enter valid number selection");
//     }
//     break;
//   case 3:
//     console.log("For Desert we have: 1.Cake, 2.Ice cream, 3.Rasmalai");
//     let desert = Number(prompt("Enter the order selection(1,2,3):"));
//     switch (desert) {
//       case 1:
//         console.log(`Your order, CAKE is on the way`);
//         break;
//       case 2:
//         console.log(`Your order, ICE CREAM is on the way`);
//         break;
//       case 3:
//         console.log(`Your order, RASMALAI is on the way`);
//         break;
//       default:
//         console.log(" Error:Enter valid number selection");
//     }
//     break;

//   default:
//     console.log("Error:Enter valid Selection(1,2,3)");
// }

let order = prompt(`Enter Your selection bike or car`);
switch (order) {
  case "bike":
    console.log("For Bike we have: 1.KTM, 2.BAJAJ, 3.ROYAL ENFIELD");
    let bike = Number(prompt("Enter the order selection(1,2,3):"));
    switch (bike) {
      case 1:
        console.log(`Youe selection is KTM.`);
        break;
      case 2:
        console.log(`Your selection is BAJAJ.`);
        break;
      case 3:
        console.log(`Your selection is ROYAL ENFIELD`);
        break;
      default:
        console.log(" Error:Enter valid number selection");
    }
    break;
  case 2:
    console.log("For Car we have: 1.BMW, 2.RANGE ROVER, 3.LAMBHORGINI");
    let car = Number(prompt("Enter the order selection(1,2,3):"));
    switch (car) {
      case 1:
        console.log(`Youe selection is BMW.`);
        break;
      case 2:
        console.log(`Your selection is RANGE ROVER.`);
        break;
      case 3:
        console.log(`Your selection is LAMBHORGINI`);
        break;
      default:
        console.log(" Error:Enter valid number selection");
    }
    break;

  default:
    console.log("Error:Enter valid Selection car or bike!");
}
