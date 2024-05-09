// dates

// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// // date are objects
// console.log(typeof mydate);

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,3)
// let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-05-2024")



// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime())

// FOR CONVERT TO SECOND 
console.log(Math.floor(Date.now()/1000));

// aour methods 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(`${newDate.getDay()} and the time is`)

newDate.toLocaleString('default',{
    weekday:"long"
  


})
console.log(newDate);