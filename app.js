let userScore= 0;
let compScore= 0;

let userScorePara= document.querySelector("#user-score");
let compScorePara= document.querySelector("#comp-score");

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="It was a draw!";
    msg.style.backgroundColor="Grey";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}.` ;
        msg.style.backgroundColor="Green";
    } else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="Red";
    }
}

const playGame=(userChoice)=>{
    //Generate Computer Choice 
    const compChoice= genCompChoice();
    if(userChoice==compChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //Computer choice can be: Scissors, paper
            userWin=compChoice==="scissors"?true:false;
        } else if(userChoice==="paper"){
            //Computer choice can be: Scissors, rock
            userWin=compChoice==="rock"?true:false;
        }else{
            //Computer choice can be: paper, rock
            userWin=compChoice==="paper"? true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
});