//for loop in this we have inisaltion,condition,increment:
//now the loop work in a way where it check the inistal value and the then goes to condtion loop  and then to //code anfter the code then i goes back to increment and then to condition and then code
/*for(let index=0; index < 10; index++) {
    const element= index;
    console.log(element)
}*/
//let us take a looping inside looping
for (let i =0; i<=10;i++){
    console.log(`outter loop:${i}`)
    for (let j = 0; j <=10;j++){
       // console.log(`inner looping:${j}`)
        console.log(i+"X"+j+"="+i*j)
    }
}
 let myarray=["bussinsmen","entreperun","jojo"]
 for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
 }

//to stop a loop at partcilaur point
for(let index=1;index<=20;index++){
    if (index==5) {
        console.log('5 there in the loop')
        break;
    }
    console.log(`value of i is:${index}`);

}//in this  the loop is stoped after the number is found




for(let index=1;index<=20;index++){
    if (index==5) {
        console.log('5 there in the loop')
        continue;
    }
    console.log(`value of i is:${index}`);

}// this contiues 