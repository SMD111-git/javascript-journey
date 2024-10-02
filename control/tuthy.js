//falsy values
//false,0,-0,bigint 0n,""(empty string),null,undefined,NaN
//tuthyvalues
//"0","false"," ",[],{},funnction(){}
const useremail=[]
if (useremail.length===0) {
    console.log("array is empty")
}
//nullish coalescing operator (??): null undefined
let val1;
val1=null ?? 10
var1=undefined ?? 15

//val1=5 ??10
//this a operator is used in db if the value is assinged null then is null or instead of 10it will a function to stafity the program get it particular value to the program
//after the function get the value into the program then it assinged to it
console.log(val1)
