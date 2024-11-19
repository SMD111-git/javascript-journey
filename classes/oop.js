const user={
    username:"SMD",
    logincount:8,
    signedin:true,
    getuserdeatils:function(){
        console.log("got user details from database");
        console.log(`username: ${this.username}`);
        
        
    }
}
console.log(user.username);
console.log(user.getuserdeatils());
 