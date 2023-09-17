function calculateCartPrice(val1,val2, ...num1){
return num1
}
calculateCartPrice(2)
// console.log(calculateCartPrice(200,400,500,2000));

const user ={
    username:"sagar",
    price:199
}
function handleObject(anyObject){
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username:"moon",
    price:399
})

const myNewArray =[200,400,600,800,1000]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]))