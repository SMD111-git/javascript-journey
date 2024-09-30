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
// this is case of array with objects:
const users=[
     {
        id:1,
        email:"h@gmail.com"
     },
     {
        id:2,
        email:"j@gmail.com"
     },
     {
        id:3,
        email:"k@gmail.com"
     }
]
console.log(users[2].email);//to acess a array of object we give the array[],and then required key to get the value of the object
console.log(tinderuser);
console.log(Object.values(tinderuser));//it giving olny the values of the object.
console.log(Object.entries(tinderuser));//it gives the [ [ 'id', '123aa' ], [ 'name', 'snd' ] ] it output will array inside array
console.log(Object.keys(tinderuser));//the output will in format of array
//so this a method to check if the object is having that key inside it or not it give in boolean values.
console.log(tinderuser.hasOwnProperty('name'));
