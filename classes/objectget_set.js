const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){ //here the propetry can be similar name but in the retrun thee varaible must be synntaxliy correct.

        return this._email.toUpperCase()
    },

    set email(value){//here it can be anything bcz it stores the value, it is not nesscary to be in the name of object propteyname(_email) 
        this.email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

