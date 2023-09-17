// control flow or logic flow

const isUserLoggedIn = true;

const temperature = 41;
if (temperature < 50) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}
// <, >,<=,>=,==,!=,=== , !==

const score = 200;
if (score > 100) {
  const power = "fly";
  console.log(`user poert:${power}`);
}

const balance = 1000;
if (balance > 500) console.log("test"), console.log("test2"); //implicite scope(dont write this type )

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allaw to buy cources");
}

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
  console.log("User Logged In");
}

// switch case

const month = "march";

switch (month) {
  case "jan":
    console.log("january");

    break;
  case "feb":
    console.log("feb");

    break;
  case "march":
    console.log("march");

    break;
  case "april":
    console.log("april");

    break;

  default:
    console.log("default case match");
    break;
}
//////////////////////////////////////////////////////////////////////

// truthy condition 

const userEmail = "moon@gmail.com";

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}


//falsy values

// false, 0 ,-0, BigInt 0n, "", null , undefined, NaN

// truthy value
// "0", "false"," " ,[] ,{}, function(){} ,(" "--> empty space between string)
 const userMail = [];

if(userMail.length=== 0){
console.log(("Array is empty"));
}

const emptyObj={}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;
console.log(val1);


// Terniary Operator 

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more thank 80");

