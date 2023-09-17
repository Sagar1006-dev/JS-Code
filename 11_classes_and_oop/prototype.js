// let myName = "sagar   ";
// let mychannel = "chai     "
// console.log(myName.trim().length);
// console.log(mychannel.truelength);  // undifined


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is $(this.spiderman)`)
    }
}
Object.prototype.sagar = function(){
    console.log(`sagar is present in all objects`);
}

Array.prototype.heysagar = function(){
    console.log(`Sagar says Hello`);
}
// heroPower.sagar()
// myHeros.sagar()
// myHeros.heysagar()
// heroPower.heysagar()

// inheritance
const User={
    name:"chai",
    email:"chai@google.com"
}

const Teacher = {
    makeVideo:true
}
const TeachingSupport = {
    isAvailable:false
}
const TASupport = {
    makeAssignment: 'JS assigment',
    fullTime:true,
    __proto__:TeachingSupport,
}
Teacher.__proto__ = User

//mdern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode    ";
String.prototype.trueLenth = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLenth()
"sagar".trueLenth()
"iceTea".trueLenth()