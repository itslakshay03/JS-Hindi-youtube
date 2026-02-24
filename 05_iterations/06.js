const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num>4 )

// or ------>

// const newNums = myNums.filter( (nums)=> {
//     return num>4
// } )
// console.log(newNums);



const newNums = []
myNums.forEach( (nums)=>{
    if(nums>4){
        newNums.push(nums)
    }
} )
console.log(newNums);




const books = [
    {
        title: 'book one', genre: 'fiction', publish: 1981, edition: 2004
    },
    {
        title: 'book two', genre: 'non-fiction', publish: 1992, edition: 2008
    },
    {
        title: 'book three', genre: 'history', publish: 1999, edition: 2007
    },
    {
        title: 'book four', genre: 'science', publish: 2009, edition: 2014
    }
]

let userBook = books.filter( (bk)=> bk.genre==='fiction' )
console.log(userBook);

userBook=books.filter( (bk)=> {
    return bk.publish>=2000
} )
console.log(userBook);
