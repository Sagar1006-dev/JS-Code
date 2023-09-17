const name ="sagar-moon"
const repoCount = 50;
// console.log(name+repoCount);
console.log(`hello my nage is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sagar')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-4,4)
console.log(anotherString);

const newStringOne = "    sagar      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))


url.includes("hitesh")
console.log(url.includes("hitesh"));


console.log(gameName.split('-'));