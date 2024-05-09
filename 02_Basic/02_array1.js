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