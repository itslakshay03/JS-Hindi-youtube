const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map( (num)=> num+10 )
// console.log(newNums);


// chaining ------------> multiple function can be applied at once

// const newNums = myNumbers
//                 .map( (num)=> num*10 )
//                 .map( (num)=>num+1 )
//                 .filter( (num)=>num>=40 )
// console.log(newNums);



// reduce function ------------>

// BASIC CODE
const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     return acc + currval
// },0)

// console.log(myTotal);

const myTotal = myNums.reduce( (acc, currval)=> acc + currval,0 )
// initially isme acc ki value 0 di jati h 
console.log(myTotal);



const shopping = [
    {
        itemName : "js",
        price: 2999
    },
    {
        itemName : "cn",
        price: 3999
    },
    {
        itemName : "dbms",
        price: 4999
    },
]

const price = shopping.reduce( (acc,item)=> acc + item.price,0 )
console.log(price);
