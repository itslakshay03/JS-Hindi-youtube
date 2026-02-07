function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3,4)
// console.log("result: ",result);


function loginUserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"));
// console.log(loginUserMessage()); // it will output as undefined because humne kuch define hi nhi kiya h 

function calculateCartPrice(...num1){  // ... here this will consider as rest operator
    return num1
}
// console.log(calculateCartPrice(200,300,400));

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
// handleObject{          // object can also be passed like this
//     username : "sam"
//     price : 599
// }

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
