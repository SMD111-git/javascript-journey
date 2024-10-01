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
function loginusermsg(username="smd"){//over here to avoid the the if block then we defalut use the value 
    if(!username){
        console.log("pls enter  a username")
    }
    return `${username} just logged in`
}
console.log(loginusermsg("SMD"));

//in above thing the code is all about the passing the parameter and get the output if we donot pass anything into the parameter then it assume as sam and print the statment and it will never go in the if block of code
//other wise if we donot pass anby value
function loginusermessage(usermae){
    if(usermae===undefined){ //or !usermae
        console.log("plese enter the value");
        return
    }
    return `${usermae} jsut looged in`
}
console.log(loginusermessage());


//    //
function cartpricecaluction(var1,var2,...num1){
    //the ... act as rest and spread operater. as if now we pass values , more the 2,the first 2 values will go to there parameters mentiod and other value left behind will go under the oprater ...num which act as a array and store it in
    return var1, var2,num1;
}
console.log(cartpricecaluction(20,500,600,700,900))
//the above one is eg of cart to addeddx the proiducts and nth no of things

//
const user={
    username:"hitesh",
    price:199
}
function handelobject(anyobject){
    console.log(`username is ${anyobject.username} `);
}
handelobject(user)//this we can acess object by the function and pass key in function 
//other method to 
handelobject({
    username:"smd",
    price:39999
})
//arrays
const mynewarray=[200,400,100,6000]
function returnsecondvalue(newarray){
    return newarray[2];
}
console.log(returnsecondvalue(mynewarray));