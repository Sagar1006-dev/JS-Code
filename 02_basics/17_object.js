// const tinderUser = new Object()
const tinderUser ={}

 tinderUser.id = "1223abc";
 tinderUser.name ="sagara";
 tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
    email: "sagar@gmail.com",
    fullname:{
        userFullname:{
            firstName:"sagar",
            lastName:"muneshwar"
        }
    }
}
console.log(regularUser.fullname.userFullname.lastName);

const obj1={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"c",
    4:"d"
}
// const obj3 = {...obj1, ...obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

const users = [
    {

        id:1,
        email:"sagar#gmail.com"
    },
    {
        id:2,
        email:"sagar#gmail.com"
    },
    {
        id:3,
        email:"sagar#gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLoggedIn"));