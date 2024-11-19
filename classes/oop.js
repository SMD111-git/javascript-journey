const user={
    username:"SMD",
    logincount:8,
    signedin:true,
    getuserdeatils:function(){
        console.log("got user details from database");
        //the keyword 'this ' refferes to the context to current  function or the class which need to  excuted
        console.log(`username:${this.username}`);
        
    }
}
console.log(user.username);
console.log(user.getuserdeatils());
