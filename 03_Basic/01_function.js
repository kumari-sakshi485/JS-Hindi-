/**A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it). */


// eg

function sayMyName(){
    console.log("sakshi");
}

// sayMyName ///function ka refrence

// sayMyName()  //execution

function addTwoNumber(num1, num2){    //num1 and num2 is parameters
    console.log(num1+num2);

}

addTwoNumber(3,7); // 3 and 7 is argument



function addTwoNumber(num1, num2){    //num1 and num2 is parameters
    // let result = num1+num2;
    // return result


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

// console.log(loginUserMessage("sakshi"));
console.log(loginUserMessage("sam"));

