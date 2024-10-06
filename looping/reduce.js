const mynum=[1,2,3]
const mytotal=mynum.reduce(function(acc,currval) {
    console.log(`acc:${acc} and curr:${currval}`)
    return acc+currval
},0) //pass any number eg:3
/**this last nummber mentiod in last is inital number assigned to accvalue from where   shoulkkd the number start like where should  it go to add nummbers*/
console.log(mytotal)
