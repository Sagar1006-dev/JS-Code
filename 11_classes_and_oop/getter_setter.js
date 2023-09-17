class User {
    constructor(email,password){
        this.email = email;
        this.password = password;

    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value
    }
    get password(){
        return `${this._password}sagara`
    }
    set password(value){
        this._password = value
    }
}
const sagar = new User("sagar@gmail.com","abc")
console.log(sagar.password);
console.log(sagar.email);
