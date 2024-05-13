/**A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it). */


// eg

function sayMyName(){
    console.log("sakshi");
}

sayMyName ///function ka refrence

sayMyName()  //execution

function addTwoNumber(num1, num2){    //num1 and num2 is parameters
    console.log(num1+num2);

}

addTwoNumber(3,7); // 3 and 7 is argument



function addTwoNumber(num1, num2){    //num1 and num2 is parameters
    let result = num1+num2;
    return result


    return num1+num2

}

const result = addTwoNumber(5,10)
// console.log(`result is ${result}`);


function loginUserMessage(username = "SAKSHI"){
    if(!username){
        console.log(`please enter a username`);
        return 

    }

return `${username} just Logged in`
}

// // console.log(loginUserMessage("sakshi"));
// console.log(loginUserMessage("sam"));

// function with obje t
// eg2
// ... ko spread operator bhi bolte h and rest bhi 

function calculateCartPrice (val1,val2,...num1){ //... rest operator
    return num1;

}

console.log(calculateCartPrice(200,300,400,500,1000,"sakshi")); //[ 200, 300, 400,500,1000 ]


// object ko kaise function mai use kiya jata hai and pass kiya jata hai hai uska eg niche hai

// make object

const user= {
    userName : "Sakshi",
    price : 199
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.price} `);
}
// handleObject(user)  //user name is Sakshi and price is 199 

// ye to direct ho gya dusra tarika bhi hai object pass krne ka lets check

// jab function ko call krenge tab usi mai object ko create kar deetehai 


handleObject({
    userName : "sakshi singh",
    price : 456
})

// direct object pass kar sakte hai function jaruri nahi hai ki phle obj create kre

// output :
// user name is sakshi singh and price is 456 
// user name is sakshi singh and price is 456 


// yese hi array hi pass kar sakte hai function mai jaise object kiya 

const myNewArray = [300,200,400,564,87779,7263,2536];
function returnSecondValue(getArray){
    return getArray[4]
}

// console.log(returnSecondValue(myNewArray)); //first method

// second method
console.log(returnSecondValue([400,600,578,9000,500]));


