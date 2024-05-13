/**
 * 
 * Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:

Block scope
Function scope
Global scope
 */

// scope ({} - ye scope hai)

let a = 10 
const b =20
var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// global scope
let scope1 = 30
{
    let scope1 = 20
    // console.log(scope1);
}

//  block scope
{
    var d=45
}
// console.log(d);


function one (){
    const username = "sakshi"
    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);
    two()

}
one()
