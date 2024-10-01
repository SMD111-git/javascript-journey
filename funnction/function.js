//function
function addtwonumbers(num1,num2){
    return num1+num2;
}
//console.log(addtwonumbers(3,2));
//const result=addtwonumbers(5,3)
//console.log(result);
function addtwonumbers(num1,num2){
    let result=num1+num2;
    return result
}
const result=addtwonumbers(3,5);
console.log("result:",result);//the point note down is that inn above function method the result was unndefined now it hold the value and the type 
//other point the key word return is used as a print statment to give the output and if any thing is given  the statemnt of return then stament will not give output or excute , bcz it below the return statment
function loginusermsg(username){
    if(username==="s"){
        console.log("pls enter  a username")
    }
    return `${username} just logged in`
}
console.log(loginusermsg("SMD"));