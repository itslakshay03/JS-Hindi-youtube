// for of ------>

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "Hello world!"
// for (const i of greetings) {
//     console.log(`each char is ${i}`);    
// }

// for(let i=0; i<greetings.length; i++){       // try to use this only
//     console.log(`char is ${greetings[i]}`);
// }

// Maps -------->

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN','India')  // duplicate value nhi ati

// console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
}

