// Dates

let myDate = new Date()
// console.log(myDate.toString());          Wed Mar 01 2023 12:03:41 GMT+0000
// console.log(myDate.toDateString());      Wed Mar 01 2023
// console.log(myDate.toLocaleString());    3/3/2023, 12:05:19 PM
// console.log(typeof myDate);              object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);            16283321989 //mili seconds used to compare dates
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})      //mostly will be used