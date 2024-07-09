const str="SMD"
console.log(str)
const str1 = new String("HKGN-baba-khawaja")
console.log(str1[0])
console.log(str1.__proto__);//this can bee seen throught browser console this is a method type of string libary and consdier as object


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//this repalces the value with existing to replacing value eg: from %20 to -
console.log(url.includes('sundar'))
console.log(str1.split('-'));
//[ this happens when the "- " is not passed through the parameter of split, we must mention wt ever is the in parameter to split the thing 
   // 'H', 'K', 'G', 'N', '-',
    //'b', 'a', 'b', 'a', '-',
    //'k', 'h', 'a', 'w', 'a',
    //'j', 'a'
 // ]

 