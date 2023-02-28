let computerGuess;
let userGuess = [];
let usernumberUpdate = document.getElementById("Textoutput");
let userNumberupdate = document.getElementById("inputBox");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  // console.log(computerGuess)

  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};
const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};


const  startnewgame=()=>{
  document.getElementById("newGameButton").style.display = "inline";
  userNumberupdate.setAttribute("disabled",true)



} 
const newgame=()=>{
    window.location.reload()
}
const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      usernumberUpdate.innerHTML = "Your guess is High 🤨";
      userNumberupdate.value = "";
    } else if (userNumber < computerGuess) {
      usernumberUpdate.innerHTML = "Your guess is low 😅";
      userNumberupdate.value = "";
    } else {
      usernumberUpdate.innerHTML = "It's Correct 😄";
      userNumberupdate.value = "";
      startnewgame();

    }
  }
  else{
    if (userNumber > computerGuess) {
        usernumberUpdate.innerHTML = `you Loose!! correct number was ${computerGuess}`;
        userNumberupdate.value = "";
        startnewgame();
      } else if (userNumber < computerGuess) {
        usernumberUpdate.innerHTML =  `you Loose!! correct number was ${computerGuess}`;
        userNumberupdate.value = "";
        startnewgame();

      } else {
        usernumberUpdate.innerHTML = "It's Correct 😄";
        userNumberupdate.value = "";
        startnewgame();

      }
  }
  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easymode = () => {
  maxGuess = 10;
  startGame();
};
const hardmode = () => {
  maxGuess = 5;
  startGame();
};
