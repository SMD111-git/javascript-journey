//forin loop
const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift for moblies'
}

for (const key in myobject) {
    //console.log(key);
    console.log(`${key} shortcut is for ${myobject[key]}`);
    
}
//array
const pro=["js","rails","py","java"]
for (const key in pro) {
    console.log(key);//this gives the keys or the indexing of the arrays in forin this is the defalut thing
   //happerns it direct gives you the keys of the array rather then the array values
   console.log(pro[key]) 
}
