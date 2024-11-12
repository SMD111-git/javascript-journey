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
