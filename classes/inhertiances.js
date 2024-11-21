class user{
    constructor(username){
        this.username=username;
        

    }
    logme(){
        console.log(`the username is${this.username}`);
        
    }

}
class teacher extends user{ //the  keyword extends is  used bcz is inhertiances the user proprites to teacher.
    constructor(username,email,password){
        super(username);//this is key word which is used olny in inhertiances case where we need just pass the var in parameters and check the console
        //the b ehind scene is all done 
        this.email=email;
        this.password=password
    }
    addcourser(){
        console.log(`the username is ${this.username}`);
        
    }
}
const chai=new teacher("smd","SMD@gmail.com","plls")
chai.addcourser()
chai.logme()//this work here bcz it is inhertinces of user class so it works
const tea=new user("md")
tea.logme()
//tea.addcourser()//this does not work bcz this not an inhertin of user or this function is not there in the  user class
console.log(chai instanceof user)
//chhecking this statment.
console.log(user instanceof teacher);
