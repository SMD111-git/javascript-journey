const arr =["happy","joy","honey"];
const arr1 = new Array("superman", "flash", "batman");//const dc_heros = ["superman", "flash", "batman"]
//console.log(arr1)
//console.log(arr.concat(arr1));//join two arrays 
//**********another method of joining*******
const allarr=[...arr,...arr1]
//console.log(allarr)


// coverting array into string
//console.log(arr.toString())


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//console.log(real_another_array);

// for each loop
let sum=0;
const a=[1,2,3]//syntrax "array.forEach(function(currentValue, index, arr), thisValue)"
a.forEach(myfunction);
function myfunction(a){
    sum+=a;
}
console.log(sum)





