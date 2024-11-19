const user={
    username:"SMD",
    logincount:8,
    signedin:true,
    getuserdeatils:function(){
        console.log("got user details from database");
        //the keyword 'this ' refferes to the context to current  function or the class which need to  excuted
        console.log(`username:${this.username}`);
        console.log(this);//as we it the current context values .
                
    }
}
console.log(user.username);
console.log(user.getuserdeatils());
console.log(this);//this  excution in golbal reffernces as we get the output as empty , as there is  no current context as golbal reefernces 
//to get the value but when u give it in the borwser it will give you "window" which having a list of values in it


