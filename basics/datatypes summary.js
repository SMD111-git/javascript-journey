//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id===anotherid)
console.log(typeof id)
console.log(typeof anotherid)
//both are having the same value in the varable but the both the type are not same

const bigNumber=258974110326569752 //this automatically used as bigint 
const bigNumbr=258974110326569752n //as at rear we added the 'n' it get into big int


// Reference (Non primitive)

// Array, Objects, Functions
 const heros =["n450","baba420","pogo"] ///this array
 // this  object
let myobj = {  /* this a varaible to store a object */
    name:"SMD",//this are  objects, 
    Age:20,
 }
console.log(myobj);


//function
const myfunction =function(){
    console.log("helloworld");
}
//****************************************************************************
//stack(primivite),heap(non-primivite)
    