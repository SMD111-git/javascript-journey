const arr=[1,2,3,4,5]
 for (const num of  arr){
    console.log(num);
 }
 //this gives yoou the the loop of array 
 const greeting="SMD here "
 for(const i of greeting){
    console.log(i)
 }//the iteratot throught each and every value.and gives it in printed output indivaly
 //maps in array and creaation of map
 const map = new Map()
 map.set("In","india")
 map.set("usa","LA")
 map.set("Tk","istanbul")
 console.log(map);//output:Map(3) { 'In' => 'india', 'usa' => 'LA', 'Tk' => 'istanbul' }

//for(const[key,value] of map){
  // console.log(key,":",value);
   
//}//is looping method 
//map method syntax: arr.map(function(element, index, array){  }, this);
let ar = [2, 3, 5, 7]//looping method

ar.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);//element gives u the curent value and index gives the position of the value

//object lopping
const bject={
   game1:"basket",
   game2:"karfton"
}
for (const[key,value] of bject){
   console.log(key,":-",value);
}