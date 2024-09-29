//objects in singleton or using constructor
//const tinderuser=new Object()
//otherone is
//const tinderuser={}//this not a singleton objects it is iteral 
const tinderuser={}
tinderuser.id="123aa"
tinderuser.name="snd"

console.log(tinderuser)
//giving objects to objects or nested object

const regularuser={
    email:"some@mail.com",
    fullname:{
        username:{
            firstname:"sda",
            lastname:"sdou"
        }
    }

}
//to acess
console.log(regularuser.fullname.username.lastname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//mergeing two objects syntax-> object.assign(obj1,obj2);
const obj3=Object.assign({},obj1,obj2);//{} this a another object created to store in another of merged obj 
console.log(obj3);
//other method to merge
const obj5={...obj1,...obj2}
console.log(obj5);