// API
// Apllication programming Interface
// the apis that works with http are knowns as web apis and in web development we basicaly work with web apis
// Api sends data as JSON

// JSON
// javascript object notation (www.json.org)
// similar to javascript objects (key value pairs)
// all the keys are string type
// no undefined values in json

// Accesing data from json

// -> JSON.parse(data) method
// to parse a string data intoa js object

let jsonRes = 
'{"message":"Not Found","code":404}'

let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.message);//Not Found

// ->JSON.stringify(json) Method
// tp pase a js object sata into json

let student = {
    name : "ankesh",
    marks: 50
}

 JSON.stringify(student);
 console.log(student);//'{name : "ankesh", marks: 50 }'

//  Testing API request

// tools
// -hoppscoth
// -postman

AJAX
// asynchronous javascript and xml
// but we use json instead of xml

// HTTP VERBS
// -> get - to accquire some data from the url or api
// -> post - to deliver some data to the url or api
// ->delete - some data to delete

// STATUS CODE
// 200-ok
// 404-not found
// 400-bad request
// 500 - internal server error
// starting with 400 means website error
// starting with 500 means clint side error


// ADD INFORMATION IN URL
// query string
// https://www.google.com/search?q=harry+poter
// here q is key and harry+poter is value


// HTTP HEADERS
// all the information on the response is send through headers
