// for loop 

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (element == 5) {
//         console.log("5 id best number");
        
//     }
//    console.log(element);
// }

// for (let index = 0; index <= 10; index++) {
//     console.log(`Outer loop value: ${index}` );
//     for (let i = 0; i <= 10; i++) {
//     //  console.log(`Inner loop value ${i} and inner loop ${i}`);
//     console.log(index + "*" + i + "=" + index*i);
        
//     }
    
// }

// let myArray = ["flash","batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`value of i is ${index}`);
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
       continue;
    }
    console.log(`value of i is ${index}`);
    
}