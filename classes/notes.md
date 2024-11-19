# js and classes
# OOPS


# object
-collection of properties and methods
-tolowwercase to uppercase
-promises

# why use oop
-object literal
- constructor function
-prototype
-classes
-instances(new,this)

#4 pillars
abstraction
encapsulation
inheritance
polymorphism


<<!Arrow Functions
Arrow functions do not have their own this. Instead, they inherit this from the surrounding context (lexical scoping). This means that the value of this inside an arrow function is the same as the this outside the arrow function.

javascript
Copy code
const obj = {
    name: 'Alice',
    greet: function() {
        setTimeout(() => {
            console.log(this.name);  // `this` refers to the obj object because arrow functions inherit `this`
        }, 1000);
    }
};
obj.greet();  // Outputs: Alice >>
