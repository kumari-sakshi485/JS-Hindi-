// array
// method of array declaration  
const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr);
const myHeros = ["shakitiman", "Shahrukhkhan", "DhruvRathee", "Rahul Gandhi"]
 console.log(myHeros);
const arr2 = new Array(1,"sakshi", "mango", "apple",433)

console.log(arr2);


// Array Method
// push() method , The push() method adds zero or more elements to the end of the array.

let city = ["Bihar", "delhi", "Punjab", "Uttar Pradesh", "MadhayaPradesh"]

// add "London" to the array 
city.push("London")
console.log(city);

// pop() method , remove last element of the array
let cities = ["Ludhiana", "Buxar", "Patana", "J&k", "Dhanbad","Up"]
console.log(cities);
// remove the last element

console.log (cities.pop())

// unshift()method, 
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// eg: - 
let language  = ["java", "python", "C", "c++", "JavaScript"]

language.unshift("PHP");
language.unshift("DevOps");


console.log(language);
console.log(language.length);

// shift()method,
// The shift() method removes the first element from an array and returns that element.
let languages = ["English", "Java", "Python", "JavaScript"];
// removes the first element of the array
let first = languages.shift();
console.log(languages);
console.log(first);

// includes() methods
// The includes() method checks if an array contains a specified element or not.
let bhasa = ["english", "french", "Bhojpiri","punjabi","Marathi"]
console.log(bhasa.includes("Marathi")); //true
console.log(bhasa.includes("methali")); //false



let languages1 = ["JavaScript", "Java", "C", "Python"];

// second argument specifies position to start the search
let check1 = languages1.includes("Java", 2);

console.log(check1); // false

// the search starts from third last element 
let check2 = languages1.includes("Java", -3);

console.log(check2); // true 

// indexof()method
// The indexOf() method returns the first index of occurance of an array element, or -1 if it is not found.

let heros1 = ["SharukhKhan", " Abhishek Bchann","maya", "ritik roshan"]

let index = heros1.indexOf("SharukhKhan")
console.log(index);


// slice() method and splice() method
// The slice() method returns a shallow copy of a portion of an array into a new array object.

let number = [2, 3, 5, 7, 11, 13, 17]

// create another array by slicing numbers from index 3 to 5

// let newarray = number.slice(3,5)
let newarray = number.slice()

console.log(number)
console.log(newarray);

// SPLICE() METHOD

// The splice() method modifies an array (adds, removes or replaces elements).

let prime_number = [2,3,5,7,9,11]
// / replace 1 element from index 4 by 13

let removeElement = prime_number.splice(4,1,13)

console.log(prime_number);
console.log(removeElement);





