#projects related to DOM

##project link

[clickhere](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Findex.html)


#solution for projects and codes


project1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
/*futher the  be update of other approchs*/

```

project2(futher changes are to be done
```javascript
const form = document.querySelector('form');

//this use case will you empty case if wirte here
//const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter the valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the results
    results.innerHTML = `<span>${bmi}</span>`;
    
  }
});
```


project3

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
project4
```javascript
//this to get the random nuber in intgere format
//console.log(parseInt(Math.random()*10+1));
const random = parseInt(Math.random() * 100 + 1);
const sbt = document.querySelector('#subt');
const userinput = document.querySelector('#guessFiled');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
//this show the value is low or high
const loworhi = document.querySelector('.loworhi');
const startover = document.querySelector('.resultparas'); //this give the display to user what is the pervious number and guessing if the numbers are done then it must restart.

const p = document.createElement('p');
let prevguess = []; //by this we can show the user's has guessed the and showcase it as the array.and donot repeat the same number
let numGuess = 1;
//to number  of attempts the user has done.
let playgame = true; //

function valideGuess(guess) {
  //this check did guess number is a vaild number in the given conditon .
}

function checkGuess(guess) {
  //this gives the msg that the given number is valid.
}

function displayGuess(guess) {
  //this interact with dom and empty the user input ,inner html guess is added and the ,reduse the number of guesses//this also display no of guesses you have done 
}

function display(mesaage) {
  //the shows the display
}
function newgame(){

}
function endgame(){
  
}
```
