// singleton
// Object.create // though constructor method

//object literals


const mySym = Symbol("key1")


const jsUser = {
  name: "sagar",
  "full name": "sagar Moon",
  [mySym]: "mykey1",
  age: 28,
  location: "nagpur",
  email: "sagar@gmail.com",
  isLoggedIn: false,
  lastLoginDys: ["Monday", "Saturday"],
};
console.log(jsUser);
console.log(jsUser.lastLoginDys);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);


jsUser.email = "sagar@chatgpt.com"; //value change or add 
// Object.freeze(jsUser);               // valuve never be changed 
jsUser.email = "sagar@microsoft.com";
console.log(jsUser);


jsUser.greeting = function(){
  console.log("hello js user");
}
jsUser.greetingTwo = function(){
  console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());