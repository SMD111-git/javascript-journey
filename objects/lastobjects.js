//destructing of object
const course={
    cousrename:"js inn hinglish",
    price:"free",
    cousreinstructer:"hitesh"
}
//console.log(course.cousreinstructer)
const {cousreinstructer}=course //this method where we extract of couserinstro  value from  object(cousers) and while printing the we use olny the key to get the value.
console.log(cousreinstructer)
//other method 
const {cousrename:nls} = course
console.log(nls);//over here we just exract and keep it in one varaible use varaible to call it
