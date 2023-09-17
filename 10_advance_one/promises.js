// fetch("http://something.com").then().catch().finally()

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB CALLS, cryptograpy, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async three");
    resolve({ username: "Sagar", email: "sagar@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if(!error){

        resolve({username:"sagar",password:"12345"});
    }else {
        reject('Error:something went wrong')
    }
  }, 1000);
});

 promiseFour.then((user)=>{
   console.log(user); 
   return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promises is either resolved or rejected"));


const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username:"javascript",password:"1235"})
    }else{
      reject("ERROR: JS went Wrong!")
    }
  },1000)
})
// async function consumePromiseFive(){
//   const response = await promiseFive 
//   console.log(response);
// }
// consumePromiseFive()
async function consumePromiseFive(){
  try {
    const response = await promiseFive
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive()

// async function getAllUsers(){
//  try {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//  const data = await response.json()
//  console.log(data);
//  } catch (error) {
//   console.log("E:",error)
//  }
// }
// getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
  return (response.json())
})
.then((data)=>{
  
console.log(data)
})
.catch((error)=> console.log(error))