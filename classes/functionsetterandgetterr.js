function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {//here it much similar to get and set and we are  defining the object proptery as we have seen in the
        //objectpropteryhandling.js file.
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);