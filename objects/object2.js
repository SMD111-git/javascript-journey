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