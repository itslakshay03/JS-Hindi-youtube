// singleton
// Object.create()

// object literals

const mySym = Symbol("key1")  // how to represent symbol

const JsUser = {
    name: "lakshay",
    "last name": "anand", 
    [mySym]:"mykey1",    // how to represent symbol
    age: 18,
    location: "delhi",
    email: "lakshayanand2004@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // try to use this format only
// console.log(JsUser["last name"]);
// console.log(JsUser[mySym]);

// JsUser["email"]="lakshayanand333@gmail.com"
// console.log(JsUser["email"]);

// Object.freeze(JsUser)
// JsUser["email"]="lakshay444@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // this i used when samne object is refered
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());