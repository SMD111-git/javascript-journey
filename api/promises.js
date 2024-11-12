//creation of promises
const promiseone = new promise(function (reslove,reject) {
    //DB calls,network
    //do an async task
    setTimeout(function(){
        console.log("async task is completed");
        
    },1000)
})
promiseone.then(function(){
    console.log("promise consumed");
    
})