const userloggein=true
const debitcard=true
const  loggedinfromgoogle= false
const loggedinfromemail=true
if(userloggein && debitcard){
    console.log("allow to but course");
}
if(loggedinfromemail||loggedinfromgoogle){
    console.log("loogedin");
    
}//anyone of them can be true from the condition
