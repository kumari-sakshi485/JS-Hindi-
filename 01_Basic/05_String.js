const userName = "Sakshisingh123"
const follower = 785;

console.log(` Hello! The user name is ${userName} and her follower is ${follower}.`);

const gameName = new String('ludo ka game hai bhai')

// split krne se output array mai aata hai 
console.log(gameName.split('-'));
// The charAt() method returns the character at a specified index (position) in a string:
let text = "Hello Rishav";
let char = text.charAt(7)
console.log(char);

// The charCodeAt() method returns the code of the character at a specified index in a string:

let string = "hi my name is rishav"
let Char = string.charCodeAt(0);
console.log(Char);

// ES2022 introduced the string method at():
// It allows the use of negative indexes while charAt() do not.
const name = "Sakshi singh";
// let letter = name.at(5);
// console.log(letter);

let letter = name[3]
console.log(letter)

// Property Access [ ]

let text1 = "hello world"
text1[0]= 'a'// Gives no error, but does not work
console.log(text1[3]);

/**Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
 */

/**slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included). */

let Fruite = 'apple, Banana , kiwi, mango , naspati'
console.log(Fruite.slice(0,20));
