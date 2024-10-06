//FOREACH in the looping we need to just pass the function method in the argument of foreach 
/**there is  no need of any incerment and conditonal statment and instailtion so we need to just pass the function or functional cal into the argument */
const myarr=["python","javascript","ruby","AWS","luinx","CPP"]
myarr.forEach(function (i) {
    console.log( "this are the lanuages to code:",i)
    
})
//if give it  already functionn and just pass in argument as function call in foreach
function printme(item) {//over here the excution is done in function just the iteration part is done in the foreach by passing the function name in the method of foreach loop
    console.log(item)
}
myarr.forEach(printme)
//ass a arrow function
myarr.forEach((item)=>{

})
