//creation of promises
const promiseone = new promise(function (resolve,reject) {
    //DB calls,network
    //do an async task
    setTimeout(function(){
        console.log("async task is completed");
        resolve()
    },1000)
})
//here we are acessing the promise thing or consuming 
promiseone.then(function(){ //over here the then() is directly  realted to the resolve argument or method 
    console.log("promise consumed");
    
})
