function sayMyName (){
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}

// sayMyName();

// function addTwoNumbers(num1,num2){
//     console.log(num1 + num2);
// }

// // addTwoNumbers(2,"3")
// // addTwoNumbers(5,6)
// const result = addTwoNumbers(5,6)
// console.log("result:",result);

function addTwoNumbers(num1,num2){
    // let result = num1+num2   
    // return result 
    return num1+num2

}
const result = addTwoNumbers(3,5)
console.log("Result:",result);

function loginUserMessage(username="saga"){
    if(!username){
        console.log('Please enter a username');
        return 

    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("sagara"));
console.log(loginUserMessage());