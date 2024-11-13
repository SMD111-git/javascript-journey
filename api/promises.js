//creation of promises
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
        let error=true
        //suppouse if we try to acess the file or networkrequest.
        if (!error) {
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
    console.log(username);
    
}).catch(function(error){
    console.log(error)
}) //here in then()we give the values , with catch()we get the value.