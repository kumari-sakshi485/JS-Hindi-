/* 1) primitive data type (7category)
 [types: string, Number, boolean, null, undefined, symbol, BigInt] */

//  const score = 100 
//  const scoreVlaue = 100.3

//  const isLoggin= false;
//  const outsideTemp =null;
//  let UserEmail;
//  const id = Symbol("123")
//  const anotherId = Symbol("123")

//  console.log(id===anotherId); //false
//  const BigNumber = 222222228767786n


/* 2)Non-primitive datatype or Refrence type 
type: Array, Objects, Functions
*/

// const heros = ["sahkitiman", "naagraj", "doga"] //array

// let myObj= {  //object
//     name:"sakshi",
//     age : 23,
//     city : "bhopal"

// }

// const myFunction = function (){ //FUNCTION
// console.log("Go do your task");
// }
// myFunction();

// ******************************
// STACK(primitive data type),  coppy milta h
// heap(non-primitive data type), refrence milta h


let myYoutubeName = 'sakshiKumari'
let anothername= myYoutubeName
anothername = 'chaiaourcode'
console.log(anothername);
console.log(myYoutubeName);


let userOne = {
    email : 'user@google.com',
    upi : "user@ybl"

}

let userTwo = userOne
userTwo.email = "sakshi@gmail.com"
console.table(userTwo)