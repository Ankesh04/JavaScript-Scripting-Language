// const tinderUser = new Object()          singleton object
const tinderUser = {}       //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);     { id:'123abc', name:'sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);     hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }    it makes both the object in array like the output will be { obj1:{ '1':'a','2':'b'}, obj2: {'3':'a', '4':'b'}}
// const obj3 = Object.assign({}, obj1, obj2, obj4)     { '1':'a','2':'b','3':'a', '4':'b'}

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//database me aisa value aata hai
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);     { id:'123abc', name:'sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));    { 'id', 'name', 'isLoggedIn'}     this changed to array and you can use loops in this further
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));     { [id:'123abc'], [name:'sammy'], [isLoggedIn: false] }

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));   ask this property exist?


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]