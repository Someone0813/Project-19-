
const DiceEl = document.getElementById("Dice");
const Current1El = document.getElementById("Current1");
const Current2El = document.getElementById("Current2");
const BtnRollEl = document.getElementById("RollDice-btn");
const Player1El = document.getElementById("Player1");
const Player2El = document.getElementById("Player2");
const HoldBtnEl = document.getElementById("Hold-btn");
const NewBtnEl = document.getElementById("NewGame-btn");

let Scores = [0,0];
let CurrentScore = 0;
let ActivePlayer = 0;

BtnRollEl.addEventListener('click',function(){
    DiceEl.style.display = "flex";
    const DiceMath = Math.floor(Math.random()*6)+1;
    DiceEl.src = `./images/Dice${DiceMath}.png`;
    if(DiceMath!==1){
        CurrentScore += DiceMath;
        // Current1El.textContent = CurrentScore;
        document.getElementById(`Current${ActivePlayer}`).textContent = CurrentScore;

    }
    else{
        document.getElementById(`Current${ActivePlayer}`).textContent = 0;
        ActivePlayer = ActivePlayer === 0 ? 1 : 0;
        CurrentScore = 0;
        Player1El.style.backgroundColor ="rgba(250, 208, 205, 1.00";
        Player2El.style.backgroundColor ="rgba(251, 230, 228, 1.00)";
    }
});

HoldBtnEl.addEventListener('click', function(){
    Scores[ActivePlayer] += CurrentScore;
    document.getElementById(`Score_${ActivePlayer}`).textContent = Scores[ActivePlayer];
    
});

NewBtnEl.addEventListener('click', function(){
    document.getElementById("UpdatePage").style.display = "flex";
});

