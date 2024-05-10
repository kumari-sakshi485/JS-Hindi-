// const tinderUser = new Object() //singleten  object

const tinderUser  = {} //non-singleten object

 tinderUser.id = 1
 tinderUser.name = "sakshi"
 tinderUser.isLoggedIn = false
// console.log(tinderUser);


// nested object
const regularUser = {
    email : 'sakshi2@gmail.com',
    fullname : {
        username :{
            fisrtname : 'sakshi',
            secondname:"kumari"
        }
    }
}

console.log(regularUser.fullname.username.fisrtname);

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"c"
}


// const obj = {obj1,obj2}

// const obj = Object.assign({},obj1,obj2)


// most of the time we use spread operator for combine

const obj = {...obj1, ...obj2}
// console.log(obj);


// syntax for ab database se value aayegi to value array of object aata hai
// eg:

const user = [
    {
        id : 1,
        email : "sakshicse@gmail.com"
    },
    {
        id:2,
        email : "sakshigoogle.com"
    },
    {
        id : 3,
        email : "microsoft@gmail.com"
    }
]

user[1].email
console.log(user);

console.log(tinderUser);

// find keys and value og tinderUser in object
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// for loop throw
//check property
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring i n object 

const course = {
    courseName:'js in hindi',
    price:'999',
    CourseInstructor :'hitesh'
}

// for value use
// course.CourseInstructor

const {CourseInstructor:teacher} =  course

console.log(teacher);

// upper jo example hai course ka oo destructure ka example hai


// API ka concept(jiase ki aapna kam dusre ko dena like menu card in resturent) sare value JSON form mai aata h


// {
//     "name": "Sakshi",
//    "coursename":"js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
