const marvel_heros = ['A','B','C']
const dc_heroes = ['D','E','F']

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeroes = marvel_heros.concat(dc_heroes)
// console.log(allHeroes);

// const all_new_heros = [...marvel_heros,...dc_heroes]
// console.log(all_new_heros);

console.log(Array.isArray("lakshay"));
console.log(Array.from("lakshay"));
console.log(Array.from({name : "lakshay"}));  // interesting
// type array me output false ayega
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
