//this a conster method or sinngleton
//Object.create
//object literals
const jsuser={name:"SMD",age:"18","islogged":"true",out:"24/7"}
//in objects we can acess by key:value, we acess by keys to get the value of the object,
console.log(jsuser.out)
console.log(jsuser["out"])//this another method of acessing the value from object
//to add the key:value to object
jsuser.location="mumbai";
console.log(jsuser);
//if the key is in string format then to acess that 
console.log(jsuser["islogged"]);
//to declear a symbol and add to the object.
const mysym=Symbol("key1");
const isuser={name:"SMD",age:"18","islogged":"true",out:"24/7",[mysym]:"mykey1"}
//the syntax of symbol in object is->[mysym]:"value". then the datatype will be symbol rather then string
console.log(isuser);
//to acess
console.log(isuser[mysym])

jsuser.email="m@gmail.com"
//Object.freeze(jsuser)
// if Object.freeze(JsUser) is uncommented, it would prevent any modifications to the object, making the subsequent email assignment ineffective.
jsuser.email="m@mail.com"
console.log(jsuser);
//as we there no change in the email as "freeze" it prevnted the change

//adding function to objects
jsuser.greeting=function(){
    console.log("hello")
}
console.log(jsuser.greeting());
//over here the function is acessing the object values by the syntax and using -> `` and the syntax is`<statment>,${this.key}` 
jsuser.greetingtwo=function(){
    console.log(`hello,${this.name}`) 
}
console.log(jsuser.greetingtwo());