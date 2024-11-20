//over here the point to note is the whatever you create with protootype is a  method injusted into  the array or string or function
/**the image u can check it out now whatever you create in prototype by mentioning the function or array it will upto the patricular
 function or array(myarray.prototype.increment), instead if give it as a object.prototype.increment nnow this method can be used by all 
 the classes or the datatypes justme need to call with the object oor variables
 */

let hero=["thro","spridemen"]
let power={
    thro:"hammer",
    spridermen:"webs",
    getspiderpower:function(){
        console.log(`the power of  spidy ${this.spridermen}`);
        
    }
}
console.log(power)
console.log(power.getspiderpower)
Object.prototype.smd= function(){
    console.log("this is used by alll the datatypes like string array and function");
    
}
Array.prototype.md=function(){
    console.log("this  olny for the arrays ");
    
}

hero.smd()
power.smd()
hero.md()
//power.md()//as tthis is not a array

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport//here the teaching able  to  acess the tasupport values and methods
}

Teacher.__proto__ = User//here teacher is able to  acess the the user daya or values.

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)//teaching support can ascess the valuess or method of teacher.

let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}//the keyword  "this" points out the current value. 

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
