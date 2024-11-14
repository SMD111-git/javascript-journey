//creation of promises
/*Promises are used to handle asynchronous operations in a more readable, manageable way.
They provide a mechanism for chaining multiple asynchronous operations.
Promises also offer a way to handle success or failure (resolve/reject) more effectively than using traditional callback functions.
It provides a cleaner and more structured way to handle asynchronous operations like API calls, file reading, or timeouts compared to older methods like callbacks.

Key Concepts of Promises:
Pending: The Promise is still being executed.
Resolved (Fulfilled): The Promise has completed successfully, and you have access to the result.
Rejected: The Promise has failed, and you can handle the error.*/
const promiseone = new Promise(function (resolve,reject) {
    //DB calls,network
    //do an async task
    setTimeout(function(){
        console.log("async task is completed");
        resolve()
    },1000)
})
//here we are acessing the promise thing or consuming 
promiseone.then(function(){ //over here the then() is directly  realted to the resolve argument or method 
    console.log("promise consumed");//this statments  comes after the async code is solved then this code runs after it is resloved and the call is  done and then 
    //show this statment
    
})

//other method
new Promise((resolve, reject) => {
    setTimeout(function () {
        console.log("async task 2");
        resolve()
    },1000)
}).then(function () {
    console.log("async 2 resolved ");
    
})

const promisethree = new Promise(function(resolve, reject){ //this a arrow function
    setTimeout(() => {
      resolve({username:'chai',email:"chai@example.com"})//passing data in the from  of objects  
    },1000);
})
promisethree.then(function(user){//all the values are returned here and to return the values we need to connect the functions
    //with the help of reslove eg we use then as it related to resolve, now to get the values need to pass the object or value in the parameter of function
    console.log(user);//here we get the values 
    
})

const promisefour = new Promise(function(resolve, reject)  {
    setTimeout(function(){
        let error=false //A local variable error is defined as false.
        //If error is false, the promise is resolved with an object containing a username and password.
        //If error were true, the promise would be rejected with an error message.
        //or give the value as ""true""" to check the output
        //suppouse if we try to acess the file or networkrequest.
        if (!error) { //!isLoggedIn means "not isLoggedIn." Since isLoggedIn is false, !isLoggedIn will be true, so the if block will execute, printing "User is not logged in."
            //If isLoggedIn were true, then !isLoggedIn would be false, and the else block would execute instead.
            resolve({username:"SMD",passowrd:"123"})
        }
        else{
            reject('ERROR:something went wrong')
        }
        
    },1000)
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
    
}).then(function(username){
    console.log(username);//to acess the username we nned undergo the first user varaible then undergo to 
    // then this then() we get and return it 
    
}).catch(function(error){
    console.log(error) //here in then()we give the values , with catch()we get the value.

}).finally(()=>{
    console.log("the promise is reslove or rejected ")
})//that the code inside finally will always execute, regardless of whether the Promise was successful or failed.
const promisefive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false 
        if (!error) { 
            resolve({username:"js",passowrd:"123"})
        }
        else{
            reject('ERROR:something went wrong in js')
        }
    },1000)

        
})
async function consumerpromisefive(){
    //An async function always returns a Promise.
    //Inside an async function, you can use the await keyword to wait for a Promise to resolve before proceeding to the next line of code.
    //fetchData as async: By adding async before function, JavaScript knows that fetchData will contain asynchronous code.
    //in this it waits for a certain time and then the code is excuted and there is no need to use catch() function
    try
    {
        const response=await promisefive
        console.log(response)
    }
    catch(error){
        console.log(error);
        
    }
}
consumerpromisefive()


//
/*async function getalluser() {
    try{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const data =await response.json()
    console.log(data)
}catch(error){
    console.log("E:",error);
    
}
}
getalluser()*/

fetch('https://api.github.com/users/SMD111-git').then (function(respons){
    return respons.json()
}).then(function(data){
    console.log(data)
}).catch((error) => console.log(error))

