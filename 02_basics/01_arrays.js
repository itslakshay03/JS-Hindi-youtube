// array

const myArr = [0,1,2,3,4,5]
// const myHeroes = ["rohit","kohli","dhoni"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);
// console.log(myArr2.length);

// Array methods

// myArr.push(6)
// myArr.pop() // removes last element
// myArr.unshift(9) // array ke starting me value add ker dega 
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // string me convert ho gya with comma separated
// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)    //  1 se 3 tak element print ho jaenge or array se nikal jaenge
console.log("C ", myArr);
console.log(myn2);
