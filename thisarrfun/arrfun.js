// this arrow function
// the (key word this it tell about the crrent state of function, objects or any code wt is the current state of it
const user={
    username:"histesh",
    price:999,
    welcome:function(){
        console.log(`${this.username},welcome to website`);
    }
}
user.welcome()
user.username="SMD"
user.welcome()
console.log(this)//so as we see we have two this key words in this senario now observe is that 
//the inner this give the scope of inner function or object state and values but where if we come out and see that outter give null object empty bcz there is ntg in that
//output of following is 
/*histesh,welcome to website
SMD,welcome to website
{}*/
/** the point be note the the keyword this is used in the object olny  so overhere it not used **/
function tea(){
    let username="smd"
    console.log(this.username);
}
tea()
/***other case also where we assign function to varaible and see
 const chai= function tea(){
    let username="smd"
    console.log(this).username;
}
tea()  */
//this a struct of thisarrowfunction and as well as the usecase of  this keyword . as usally it show undefined and empty in output.
/*const tea=()=>{
    let username="smd"
    console.log(this).username;
}
tea()*/

//arrowfunctio diusccion
/*()=>{}*///this basics syntax.
const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(5,5))
//other way or method 
const add=(num1,num2)=> num1+num2 //or can do like this also(num1+num2)
//over here there is no need to write the keyword return to get the  output if there no {} in functio just write like this.
console.log(add(2,3));
/***for an object get return in above method we need to ({username:"smd"}),like this , the parameter or the brackets are imp for object to get return value of it */
const two=(num1,num2)=>({username:"MD"})
console.log(two())
//output is { username: 'MD' }



/*invoked function*/
/*(function chai(){
    console.log("DB")
})();*/
//

/*( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')*/

(function() {
	// IIFE code block
	var localVar = 'This is a local variable';
	console.log(localVar); // Output: This is a local variable
})();
//due some issues the invoked is not working getting invoked the conspect it the a function within (whole function within this )and called by ()