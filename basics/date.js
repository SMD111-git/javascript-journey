let mydate = new Date();//Date(it is a datatype)
console.log(mydate.toString());//output:Wed Jul 10 2024 10:17:22 GMT+0000
console.log(mydate.toDateString());//output:Wed Jul 10 2024
console.log(mydate.toLocaleDateString()); // output: 7/10/2024
console.log(typeof mydate) //it a datatype of no primivite and a object */


let myCreatedDate = new Date("01-07-2024")
//console.log(myCreatedDate.toLocaleDateString());
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toString());
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")


/*let mytimestamps=Date.now() //
console.log(mytimestamps);
console.log(myCreatedDate.getTime());
console.log(Math.round(myCreatedDate.getTime()/1000));*/

let newDate = new Date()
//console.log(newDate.getMonth()+1);
//console.log(newDate.getDay());
 

newDate.toLocaleString('default'),{
    weekday:"long"
}
console.log(newDate)//output:2024-07-10T11:29:13.369Z