const user={
    username:"SMD",
    logincount:8,
    signedin:true,
    getuserdeatils:function(){
        console.log("got user details from database");
        //the keyword 'this ' refferes to the context to current  function or the class which need to  excuted
        console.log(`username:${this.username}`);
        console.log(this);//as we it the current context values .
                
    }
}
console.log(user.username);
console.log(user.getuserdeatils());
console.log(this);//this  excution in golbal reffernces as we get the output as empty , as there is  no current context as golbal reefernces 
//to get the value but when u give it in the borwser it will give you "window" which having a list of values in it

//const promiseone = new Promise() 
/*constructor function  */
//eg 
function user(username,logincount,isloged){
    this.username=username;//the key point is that "this" is used as reffernces of varaible or create an empty object to store the value in it
    //so this.username  act as variable
    this.logincount=logincount;
    this.isloged=isloged;


}

const userone= user("hitesh",12,true);
const usertwo=user("smd",11,false)
console.log(userone);

//as we see a varaible named userone is store init and the user function retirve it and ddipaly 
//but as we give another varaible as usertwo thenn is  the output is  overwrited so to avoid this stuiation 
//we use a keyword "new" which give rise to contructor function where we constrictor function is  
//is a special type of function used to create and initialize objects. It is typically used to create multiple 
//instances of a similar object type. Constructor functions are often written in a way that they are invoked using the new keyword, 
//which ensures that a new object is created and the this keyword inside the constructor refers to that object
//so  "new" keyword  gives a new instnances for every new varaible or object create.

function use(username,logincount,isloged){
    this.username=username;//the key point is that "this" is used as reffernces of varaible or create an empty object to store the value in it
    //so this.username  act as variable
    this.logincount=logincount;
    this.isloged=isloged;
    this.greeting=function(){
        console.log(`welcome ${username}`);
        
    }

}

const useone=new use("hitesh",12,true);
const usetwo=new use("smd",11,false)
console.log(useone);
console.log(usetwo);
