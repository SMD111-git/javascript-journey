let index =0;
while (index<=10) {
    console.log(`the value of index is : ${index}`)
    index=index+3;
    
}
//it much silimar to the for loop but the structure different 

let myarray=["bat","super","asw","wosum"]
let arr=0;
while(arr<myarray.length){
    console.log(`the value of array is:${myarray[arr]}`);
    arr++;
}//the point is that if we pass the myarray[arr] then gives the  single output element at a time
/**
 the value of array  is:bat
the value of array  is:super
the value of array  is:asw
the value of array  is:wosum
*/
//but if we donot pass any anything in the myarray just give it the the output will  be 
/*the value of array  is:bat,super,asw,wosum
the value of array  is:bat,super,asw,wosum
the value of array  is:bat,super,asw,wosum
the value of array  is:bat,super,asw,wosum*/

//do while loop
let score =1;// give it as 11

do {
    console.log('score is ${score}')
    score++
} while (score<=10);//over here the excution or statment will be printed first and then moves to the condition part 
//after checking the condition if it staify the condition then it goes to excution part and goes on but if not then the loop will be stoped after thing the condition
