const ContactId =  12345
let accountWmail= 'sakshibhoj123@gmail.com'
var accountPasword= '123456'

accountCity= 'bihar'

// ContactId = 2 // not allowed
// accountWmail ='sakshicse@gmail.com' // allow
// accountPasword= 'gfgdg' // allow
// accountCity= 'bengaluru'  // allow



console.log( accountPasword);
console.log(accountWmail);
console.log(`user password is ${ accountPasword}`);
console.log(accountCity);

console.table([ContactId,accountPasword,accountWmail,accountCity])
// console.table krne se sare output  ek table form  mai  aajate hai like this
// ─────────┬───────────────────────────┐
// │ (index) │ Values                    │
// ├─────────┼───────────────────────────┤
// │ 0       │ 12345                     │
// │ 1       │ '123456'                  │
// │ 2       │ 'sakshibhoj123@gmail.com' │
// │ 3       │ 'bihar'                   │
// └─────────┴───────────────────────────┘