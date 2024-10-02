// this arrow function
// the (key word this it tell about the crrent state of function, objects or any code wt is the current state of it
const user={
    username:"histesh",
    price:999,
    welcome:function(){
        console.log(`${this.username},welcome to website`);
    }
}
user.welcome()
user.username="SMD"
user.welcome()
console.log(this)//so as we see we have two this key words in this senario now observe is that 
//the inner this give the scope of inner function or object state and values but where if we come out and see that outter give null object empty bcz there is ntg in that
//output of following is 
/*histesh,welcome to website
SMD,welcome to website
{}*/

