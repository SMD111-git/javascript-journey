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
//to declear a symbol
const mysym=Symbol("key1");
const isuser={name:"SMD",age:"18","islogged":"true",out:"24/7",[mysym]:"mykey1"}
console.log(isuser);