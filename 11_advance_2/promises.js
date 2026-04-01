// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) +1;
//     if(internetSpeed >4){
//         // console.log("your data was saved")
//         success();
//     }
//     else{
//         // console.log("weak connection, data not saved");
//         failure();
//     }
    

// }
// savetoDb(
//     "Ankesh Agarwal",
//     () => {
//         console.log("your data was saved");
//         savetoDb(
//             "Hello World",
//             () => {
//                 console.log("your data2 was saved");
//                 savetoDb(
//                     " Agarwal",
//                     () => {
//                         console.log("your data3 was saved");
//                         savetoDb(
//                             "World",
//                             () => {
//                                 console.log("your data4 was saved");
                        
//                             },
//                             () =>{
//                                 console.log("weak connection, data not saved");
//                             }
//                         )
//                     },
//                     () =>{
//                         console.log("weak connection, data not saved");
//                 }
//         )})
//     },
//     () =>{
//         console.log("weak connection, data not saved");
//     }
// )
//callback hell

//PROMISES
//the promises object repersent the eventual completion (or failure) of an asynchonous operation and its resulting value.
// above a asynchomous situation is created
// Promises ia object
//there are two keywords we use in promises

//Resolve-> success

//Reject-> failure

function savetoDb(data){
    let internetSpeed = Math.floor(Math.random() * 10) +1;
    return new Promise((resolve, reject)=>{
        if (internetSpeed > 4){
            resolve("data was saved");
        }
        else {
            reject("weak connection");
        }
    });

}


let request = savetoDb("ankesh agarwal");
//there are two state in promises 
// pending which means result is still pending
// rejected which means it lead to failure
// fulfilled which means there was success

//TWO METHODS IN PROMISE
// THEN() -- if the state is fulfilled then we can use then()(promise.then())
// CATCH() -- if rejected then we use catch()(promise.catch())

request
    .then(()=>{
        console.log("promise was resolved")
    })
    .catch(()=>{
        console.log("promise was rejected");
    })

// ether we can write like this or 
savetoDb("ankesh agarwal")
    .then(()=>{
        console.log("promise was resolved")
    })
    .catch(()=>{
        console.log("promise was rejected");
    })

// or like this , as the callback function reture the request s


// PROMISE CHANNING
// it means using then() in regular 

savetoDb("ankesh agarwal")
    .then(()=>{
        console.log("data 1 .promise was resolved")
        savetoDb("ankesh agarwal")
            .then(()=>{
                console.log("data 2 .promise was resolved")
                savetoDb("ankesh agarwal")
                    .then(()=>{
                        console.log("data 3 .promise was resolved")
                    })
            })
    })
    .catch(()=>{
        console.log("promise was rejected");
    })
//same like the try and catch there are multiple try and only one catch here also same thing happens