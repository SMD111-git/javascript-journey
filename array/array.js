//array
const myarr=[1,2,3,5,6];
const  arrman=["power","money"];
const arr = new Array(1,2,3,4,5,6);
console.log(myarr[0])

//array methods
/*myarr.push(7);
console.log(myarr);
myarr.pop(7);
console.log(myarr);
myarr.unshift(9);
console.log(myarr)//[ 9, 1, 2, 3, 5, 6 ]The unshift() method adds new elements to the beginning of an array.
myarr.shift();
console.log(myarr)*///[ 1, 2, 3, 5, 6 ] the shift method removes the element from the array at the beginning .
const newarr=myarr.join('-');// output:1-2-3-5-6 , if pass '-' or any else in (''), then it will join values
console.log(newarr);
console.log(myarr);


// slice, splice

console.log("A ", myarr);//A  [ 1, 2, 3, 5, 6 ]

const myn1 = myarr.slice(1, 3)//[2,3]

console.log(myn1);
console.log("B ", myarr);//b [1,2,3,5,6]


const myn2 = myarr.splice(1, 3)
console.log("C ", myarr);//c [1,6]
console.log(myn2);