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
if (playgame) {
  subt.addEventListener('click', function (e) {
    //this from so over here the value will go to sever , so that we prevent the the number go the sever
    e.preventDefault();
    const guess = parseInt(userinput.value);
    valideGuess(guess);
    //the check is game avaible and shows the vailed
  });
}
function valideGuess(guess) {
  //this check did guess number is a vaild number in the given conditon .
  if (isNAN(guess)) {
    alert(`please add or enter avalid number`);
  } else if (guess < 1) {
    alert(`please add or enter avalid number`);
  } else if (guess > 100) {
    alert(`please add or enter avalid number`);
  } else {
    prevguess.push(guess);
    //to check the attempts
    //and stop the attempts if the attempts are finished
    if (numGuess == 11) {
      displayGuess(guess);
      display(`gameover . random number was ${random}`);
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //this gives the msg that the given number is valid.

  if (guess === random) {
    display(`guessed it right`);
    endgame();
  } else if (guess < random) {
    display(`the number is greater then the the guess number`);
  }
}

function displayGuess(guess) {
  //this interact with dom and empty the user input ,inner html guess is added and the ,reduse the number of guesses//this also display no of guesses you have done

  userinput.value = '';
  guessSlot.innerHTML += `${guess}`; //this add the number as array.
  numGuess++; //this increase as the number of guess are going on as  1to10 after ever iteartor
  remaining.innerHTML = `${11 - numGuess}`; //to show the reaming guesses
}

function display(mesaage) {
  //the shows the display
  loworhi.innerHTML = `<h2>${mesaage}</h2>`;
}
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


###or else the other method


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}




```
