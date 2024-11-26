class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){//to write the proptery value of object must be same as in the object constructor
        return this._email.toUpperCase()
    }
    set email(value){
        //setter are never returned.
        this._email=value
    }
    get password(){
        return `${this._password}OPJHCHJC`//over here we are creating another varaiale bcz the to get the values bcz in the above the object 
        //user the varaible is created this.password but here we are try to get it value of password in new varaible or by overwritting it
        //bcz this.password is already there in object. so this getter, get's  the value.
        //here we get the value and modify it accordingly and next send to setter to set it value into the varaible
    }
    set password(value){//here the value of varaible is been setted and we get in console outputafter settingit 
        this._password = value//in the parameter the value must be passed it the syntax
    }

}
const smd= new user("smd@.ai","1234")
console.log(smd.password)
console.log(smd.email);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

/*
-------T----------------------TO GET IN MUCH MORE EXPALINTION METHOD--------------------------------------------
*/
/**In JavaScript, **getters** and **setters** are special methods used to define how to access and modify an object's properties. They allow you to control how properties are read or written, providing a more controlled way to interact with the object's data.

### 1. **Getter**:
A getter is a method that gets the value of a property. It allows you to define a custom behavior when the property is accessed, while making the access look like a normal property read.

#### Syntax:
```javascript
objectName.get propertyName() {
  // return some value
}
```

#### Example:
```javascript
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for 'name' property
  get name() {
    return this._name;
  }

  // Getter for 'age' property
  get age() {
    return this._age;
  }
}

const person = new Person('John', 30);
console.log(person.name); // John (Accessing the 'name' property using the getter)
```

### 2. **Setter**:
A setter is a method that sets the value of a property. It allows you to define custom behavior for when a property is modified, while making the modification look like a normal property assignment.

#### Syntax:
```javascript
objectName.set propertyName(value) {
  // set value to some property
}
```

#### Example:
```javascript
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Setter for 'name' property
  set name(newName) {
    this._name = newName;
  }

  // Setter for 'age' property
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.log('Age must be positive!');
    }
  }
}

const person = new Person('John', 30);
console.log(person.age);  // 30

// Using the setter to modify the 'age' property
person.age = 35;
console.log(person.age);  // 35

person.age = -5; // Will show "Age must be positive!"
```

### Key Points:
- **Getters** are used to retrieve property values, while **setters** are used to modify them.
- They are often used to encapsulate logic that needs to occur when a property is accessed or changed.
- You can use both getter and setter for the same property to define behavior for both reading and writing.
  
### Using Getters and Setters with Object Literals:
In addition to using classes, you can also define getters and setters in object literals:

```javascript
const person = {
  _name: 'Alice',
  
  // Getter
  get name() {
    return this._name;
  },

  // Setter
  set name(newName) {
    this._name = newName;
  }
};

console.log(person.name); // Alice
person.name = 'Bob';
console.log(person.name); // Bob
```

This allows more flexibility and can be used with any object in JavaScript. */