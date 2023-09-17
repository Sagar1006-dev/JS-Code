// memory stack & Heap
// stack memory used in Primitive & Heap memory used in non-Primitive


let myTouttubename ="sagar"

let anothername = myTouttubename
anothername = 'muneshwar';

console.log(myTouttubename);
console.log(anothername);

let user1 = {
    email:'user@gmail.com',
    upi:'user@123'
}
let user2 = user1

user2.email= "sagar@google.com"

console.log(user1.email);
console.log(user2.email);