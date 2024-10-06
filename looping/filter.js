const coding=["js","ruby","py","cpp","java"]
const values=coding.forEach((item)=>{
    console.log(item)
})//as we see we get the return value as undifened
console.log(values)



//filter.

/*const nums=[1,2,3,4,5,6,7,8,9,10]
let newnum=nums.filter((num)=>num>4)//here just we neeed to give the condition we get the return value
console.log(newnum)*/

//
const nums=[1,2,3,4,5,6,7,8,9,10]
let newnum=nums.filter((num)=>{
    return num>4 //this is imp to note return statment to get the values ,if use scope
})
console.log(newnum)

//
