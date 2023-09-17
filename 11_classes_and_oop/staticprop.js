class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
     static createId(){
      return `123`
    }
    
}

const sagar = new User("sagar")
// console.log(sagar.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","i@phne.com")
console.log(iphone.logMe());