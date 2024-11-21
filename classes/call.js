//this a method where we do a function call into another function call , the point is that if we do a functioncallone 
//inside the functiontwo , the call is done but the excution is not appread in the output or console 
//as it the sutation is here we need to jusfity by use a method "call" in js
function setuser(username){
    this.username=username
}
function createuser(username,email,password){
    setuser.call(this, username)
    //setuser(username) by doing this fun call we are not able to get the desire ouput as this we are olny getting the call or reffernces into the second fun 
    //but there no excution as the reffernces done the node things that the excution part is clso done but the excution is not done 
    //the key word "this" is used to carry out the excution or varaible of function1 to function2 . "this" keyword .
    this.email=email
    this.password=password 
}
const chai= new createuser("chai","cchai@gb.com","123") //new keyword is used to  create a functionconsturct to store in new object and showcase in console
console.log(chai);
