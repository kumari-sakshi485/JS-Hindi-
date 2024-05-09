const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", " flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
//[ 'thor', 'ironman', 'spiderman', [ 'superman', ' flash', 'batman' ] ]
// concat() method
const hero = marvel_heros.concat(dc_heros);
// console.log(hero);

// spread() method

const allheros = [...marvel_heros,...dc_heros]
console.log(allheros);

// concat method and spread method dono 2 array ko ek sath add kar deta hai dono mai se koi bhi ek use kar sakte hai 2 array ko ek sath add krne ke liye

const anotherArray = [1,2,3,[4,5,6],7,[6,7], [4,5]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray);


console.log(Array.isArray("sakshi")) //false 
console.log(Array.from("sakshi"));  //[ 's', 'a', 'k', 's', 'h', 'i' ]

console.log(Array.from({
    name:"sakshi"
}));  ///intresting (this can be give an empty array)

let score1 = 100 
let score2= 200
let score3 =300

console.log(Array.of(score1,score2,score3));