// for of

// const arr = [1, 2, 3, 4, 5, 6];

// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "Hello world!";
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }

// Maps

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United State Of America");
// map.set("Fr", "France");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

// const myObject ={
//     game1:"NFS",
//     game2:"Spiderman"
// }
// for (const[key, value] of myObject) {
//     console.log(key, ':-', value);

// }

// const myObject = {
//   js: "javascript",
//   cpp: "c++",
//   rb: "ruby",
//   swift: "swift by app",
// };
// for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming =["js","rb","py","java","cpp"]
// for (const key in programming) {
//    console.log(programming[key]);
// }

// const map = new Map();
// map.set("IN", "India");
// map.set("USA", "United State Of America");
// map.set("Fr", "France");

// for (const key in map) {
//    console.log(key);
// }           this loop will not work
const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (item){
// console.log(item);
// })
// coding.forEach((item)=>{
// console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
// console.log(item,index,arr);
// })

const myCoding = [
  {
    languageName: "javaScript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];
myCoding.forEach( (item)=>{
console.log(item.languageName);
})