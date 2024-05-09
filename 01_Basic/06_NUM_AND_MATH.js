const score = 400;
console.log(score);

const balance = new Number(100)

console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++

console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(46.333));
// ceil mtlb top value ko choose krna
console.log(Math.ceil(8.4))
console.log(Math.floor(5.5))
console.log(Math.min(3,5,7,2,9))
console.log(Math.max(10,10,45,3,6,88,88));
// random ki value hamesa 0 and 1 ke bitch mai aayegi okay to value hamesa 0.1 , 0.2 , 0.3 ho sakta hai 
console.log(Math.random())
console.log((Math.random()*10)+1)
console.log((Math.random()*10)+1)
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)


//  min and max nikalne ka formula
const min = 10;
const max = 20;
console.log(Math.random()*(max-min+1))
console.log(Math.floor(Math.random()*(max-min+1))+min);

