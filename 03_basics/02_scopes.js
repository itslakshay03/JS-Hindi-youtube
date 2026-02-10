// koi bhi variable scope ke outside declare hota h to vo har jagah available h but scope ke under vala sirf vahi available hoga
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("INNER: ",a)
}


console.log(a);
// console.log(b);



function one() {
    const username = "lakshay"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website); 
    // take an example of ice-cream bada chote se nhi le skta but chota bade se le skta h 
    two()
}

one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



// ++++++++++++++++ interesting ++++++++++++++++

console.log(addone(5));
function addone(num){ // aise kerne pe ans aa jayega 
    return num + 1
}


addTwo(5)
const addTwo = function(num){  // jab bhi aise declare kerte h to ans nhi ayega error ayega 
    return num + 2 
}