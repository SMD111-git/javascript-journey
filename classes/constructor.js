class user{//declareing a class with a name user inside the class the constructor is used 
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptpassword(){
        return `${this.password}abc` //these is function inbuilt
    }
    //method 
    changeusername(){
        return`${this.username.toUpperCase()}`
    }
}
const chai=new user("chai","chai@outlook.com","123lllo")
console.log(chai.encryptpassword());
console.log(chai.changeusername());
//console.log(chai.constructor()); this  cannot happen ?

//behinnd the scene
//if no class
