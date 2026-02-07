// const tinderUser = new Object()  // singleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "lakshay",
            lastname: "anand"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2} // mostly this format is used and easy also
// console.log(obj3);

// console.log(Object.keys(tinderUser));  // array me return karega iska output
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // cheeck karega ki ye key present h ya nhi object ke pass


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// agr mujhe courseInstructor ki value nikalni ho to simple ye karenge
// console.log(course.courseInstructor)

const {courseInstructor} = course // isse de-structuring kehte h (impt in use)
console.log(courseInstructor);


// little bit about json that how it represented.
// {
//     "name": "lakshay",
//     "coursename":  "js in hindi",
//     "price": "free"
// }