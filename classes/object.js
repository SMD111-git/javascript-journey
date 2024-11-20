function multipleby5(num){
    return num*5

}
multipleby5.power=2
console.log(multipleby5(5));
console.log(multipleby5.power);//the so imp thing is to note that the all the thing in in the js are at end realted to object and the object related to null
//


function createuser(username,score){
/*object deaclred*/this.username=username
                    this.score=score
}
//prototype
/*this a way to create method for a function , like we have an inbulit 
methods in arrays and object like map, revome and etc..
here in this prototype we injute the methods into the  function
by user the function name and the required method name and keyword prototype
and create another function init*/

createuser.prototype.increment= function(){
    this.score++
}
createuser.prototype.printme=function(){
    console.log(`the price of the ${this.score}`);
    
}

const chai=new createuser("chai",25)//here the  new keyword is used as the above method are create with the prototype now the createuser iss again create as newobject and it run the function without overwriting it 
//by the this new keyword we create a new object with same function name and method.
const tea=new createuser("tea",50)
chai.printme()

/**The new keyword creates two new objects, chai and tea, from the createUser constructor function.
These objects inherit from the prototype of the createUser function, meaning they both have access to the increment and printMe methods added to the prototype.
chai has the username "chai" and score 25, while tea has the username "tea" and score 250. */
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
