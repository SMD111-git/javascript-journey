//FOREACH in the looping we need to just pass the function method in the argument of foreach 
/**there is  no need of any incerment and conditonal statment and instailtion so we need to just pass the function or functional cal into the argument */
const myarr=["python","javascript","ruby","AWS","luinx","CPP"]
myarr.forEach(function (i) {
    console.log( "this are the lanuages to code:",i)
    
})//this  backet is of foreach.
//if give it  already functionn and just pass in argument as function call in foreach
function printme(item) {//over here the excution is done in function just the iteration part is done in the foreach by passing the function name in the method of foreach loop
    console.log(item)
}
myarr.forEach(printme)
//ass a arrow function
myarr.forEach((item)=>{
    console.log(item)
})

//this argument is not olny have the variable but also has index,and fun array decleared
myarr.forEach((j,index,arr)=>{
    console.log(j,index,arr)//arr gives whole array and give the acess
})


mycoding=[
    {
        laguagename:"js",
        lanugauefile:"node"
    },
    {
        laguagename:"python",
        lanugagefile:"py"
    },
    {
        laguagename:"java",
        lanugagefile:".j"
    }
]
mycoding.forEach((item)=>{
    console.log(item.laguagename);
    
})
