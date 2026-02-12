const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this); // current context ki baat ho rhi h idhar jo bhi value hogi is object ki vo print ho jaengi
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // idhar globally output print hoga to empty braces aenge


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // function ke under ye undefined dikhaega only in object output show karega 
// }
// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2)=>{  // basic way for arrow function
//     return num1+num2
// }

const addTwo = (num1,num2)=>(num1+num2)

console.log(addTwo(3,4));
