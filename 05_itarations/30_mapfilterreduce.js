// const coding = ["js", "ruby", "java", "python", "cpp"];
// const values = coding.forEach( (item)=>{
//     console.log(item);
//                                    //forEach does not return the value
// })
// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newMuns = myNums.filter( (num) => {
//      return num > 4
// })
// const newNums =[]
// myNums.forEach( (num)=>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
  {
    title: "Book One",
    genre: "Fiction",
    Publish: 1981,
    edition: 2004,
  },
  {
    title: "Book Two",
    genre: "History",
    Publish: 1982,
    edition: 2003,
  },
  {
    title: "Book Three",
    genre: "Fiction",
    Publish: 1983,
    edition: 2006,
  },
  {
    title: "Book Four",
    genre: "Non-Fiction",
    Publish: 1984,
    edition: 2007,
  },
  {
    title: "Book Five",
    genre: "History",
    Publish: 1985,
    edition: 2008,
  },
  {
    title: "Book Six",
    genre: "Fiction",
    Publish: 1986,
    edition: 2009,
  },
  {
    title: "Book Seven",
    genre: "Science",
    Publish: 1987,
    edition: 2010,
  },
  {
    title: "Book Eight",
    genre: "History",
    Publish: 1988,
    edition: 2011,
  },
  {
    title: "Book Nine",
    genre: "Non-Fiction",
    Publish: 1989,
    edition: 2012,
  },
];

// const userBooks = books.filter((bk) => bk.genre === "History");
// console.log(userBooks);
// const userBooks = books.filter((bk) => {
//   return bk.Publish >= 1981;
// });
// console.log(userBooks);
// const userBooks = books.filter((bk) => {
//   return bk.Publish > 1985 && bk.genre === "History";
// });
// console.log(userBooks);

// ..........................................books.......................
// MAP FUNTION

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  const newNums = myNumbers.map((num)=>{
//     return num + 10
// })
// console.log(newNums);

// const newNum =[]
// myNumbers.forEach( (num)=>{
//     if (num += 10) {
//         newNum.push(num)
//     }
// })

// console.log(newNum);

// const newNums = myNumbers
//                 .map((num)=>num*10)
//                 .map((num)=>num+1)
//                 .filter((num)=>num>=40)

// console.log(newNums);

// ................Reduce............Method...........................

// const myNums = [1, 2, 3];
// // const myTotal = myNums.reduce(function (acc,curval){
// //     console.log(`acc:${acc} and curval: ${curval}`);
// //     return acc + curval

// // },0)
// const myTotal = myNums.reduce((acc, curr) => {
//   console.log(`acc:${acc} and curval: ${curr}`);
//   return acc + curr;
// }, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
