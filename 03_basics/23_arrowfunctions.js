const user = {
    username:"sagar",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username="Sagar"
//     console.log(this);
// }
// chai()

// const chai = function (){
//     let username="Sagar"
//     console.log(this.username);
// }
// chai()

// const chai = ()=>{
//     let username="Sagar"
//     console.log(this.username);
// }
// chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// console.log(addTwo(3,4));

// const addTwo = (num1,num2)=>  num1 + num2
// const addTwo = (num1,num2)=>  (num1 + num2)


const addTwo = (num1,num2)=>  ({username: "saga"})


console.log(addTwo(3,4));

