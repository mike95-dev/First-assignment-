// Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice){

const computerchoice = choices[Math.floor(Math.random()* 3)];
let result = "";

if(playerChoice === computerchoice){
    result = "A TIE!"
}
else{
    switch(playerChoice){
        case "rock":
           result =  (computerchoice === "scissors")? "You Win!" : "You Lose!";
           break; 
        case "paper":
            result =  (computerchoice === "rock")? "You Win!" : "You Lose!";
            break; 
        case "scissors":
            result =  (computerchoice === "paper")? "You Win!" : "You Lose!";
            break; 
    }
}

playerDisplay.textContent = `PLAYER:
${playerChoice}`
computerDisplay.textContent = `COMPUTER: ${computerchoice}`

}