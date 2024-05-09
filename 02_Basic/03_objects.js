// objects 

// singleton  (LITRALS SE DECLARATION KRTE HAI TO SINLETON NHI HOGA (CONSTRUCTER SE AGR BANEGA TO HA HAMESA SINGLETON HOGA) )

// objects literals
const mySym = Symbol("key1")
const jsUser = {
    name :"sakshi",
    lastname:"kumari",
    age :23,
    [mySym ]:"mykey1",
    location :"bihar",
    Email : "sakshicse@google.com",
    isLoggedIn :"false"
}

//   value access
console.log(jsUser.Email);
console.log(jsUser["name"])
console.log(jsUser["Email"]);
console.log(jsUser[mySym]);

// change value

jsUser.Email = "sakshichatgpt.com"
// Object.freeze(jsUser) //esse dusra koi ese change nhi kar payega bad mai
jsUser.Email = "sakshibhoj@gmail.com"
console.log(jsUser);


// function in objects

 
  jsUser.greeting = function(){
    console.log("hello, sir");
}
console.log(jsUser.greeting());

jsUser.greeting1 = function(){
    console.log(`hello js user , ${this.name}`); //object mai name ko access this.name se hi kar sakte hai like ${this.name}
}

console.log(jsUser.greeting1());

// note hamesa value ko . se hi access krenge  pr kabhi kabhin[] ye bhi use ho skta hai interview wergra mai puch sakte hai