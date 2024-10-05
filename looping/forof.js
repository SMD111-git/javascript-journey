//for of
//this  are array specifed looping
const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
    
}//this loop are replacment of all other loops no need of increment and other stuff.

const greeting="hello world!"
for (const j of greeting) {
   /* if (j==" ") {
        console.log("remove");
        continue;
    }*/
    console.log(`each charater is: ${j}`);
    
}


//maps this are know for unqiue values no dulipcates are allowed
const map = new Map()
map.set('IN',"india")
map.set('USA',"united states of america")
map.set('CN',"china")
map.set('TK',"Tukery")
console.log(map);
//output
/*Map(4) {
    'IN' => 'india',
    'USA' => 'united states of america',
    'CN' => 'china',
    'TK' => 'Tukery'
  }*/
 for (const [key,value] of map) {
    console.log(key,":",value)
 }


 /*const myobject{
    game1: "nfs" ,
    game2:"spiderman"

 }
for (const [key,value] of myobject) {
    console.log(key,":",value);
    
}*///this is not working for object for this forof looping
