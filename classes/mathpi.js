//this is  a method where we can create the rule or set rules for an object like in below we unndergo the thinng
//we check math.pi  as math  is object and we are checking  pi which is a proptery of an object(math), so here we are checking the rule set of pi
const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);//here we can see the set of rules.


//can we try to overwrite the values of inbuilt object example as above one 
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);
//we cannot change the values bcz ther already a set of  rule wirtten for this  inbulit object 
//but we can set rule for your own object property created

const chai={//creation of object 
    name: 'ginger chai',
    price: 250,
    isAvailable: true

}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));//in the output we can see the other rule or propterys
//here we are set rules for the name property which from the object chai
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,//there are many  other proptery
    orderChai: function(){
        console.log("chai nhi bni");
    }
    
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));//thee  changed propterys



//for the iteration some of the object doesnot allow to loop so we are checking the 

//for a object to looped or iterated the "enumerable" these is the proptery  need to check  true or false in own created object
//in the builtin if the proptery is false the it not iterated
//eg for this chai 

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}//the point over here if a funnction is inside the object then the we must handel that so we use a if(condition) to handel