//map
const mynum=[1,2,3,4,5,6,7,8,9,10]
const newnum=mynum.map((i)=>i+10)
console.log(newnum);
//chaing where we have maps and filter in seques and give the final array as per the  chaning sequenes
let mynumbers=[1,2,3,4,5,6,7,8,9,10]
let newnumbers = mynumbers
    .map((num)=> num*10)
    .map((num)=>num+1)
    .filter((num)=> num>=40)
console.log(newnumbers);


