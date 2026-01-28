let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");
const showWinner=(userwin,userChoice,computerchoice)=>{
    if(userwin){
        console.log("You win");
        userscore++;
        userscorePara.innerText=userscore;
        msg.innerText=`You Win! Your ${userChoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        console.log("You Lose");
        compscore++;
        compscorePara.innerText=compscore;
        msg.innerText=`You Loose! ${computerchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}
const playgame=(userChoice) =>{
    console.log("UserChoice",userChoice);

    //generate comp choice
    const computerchoice=gencomputerchoice();
    console.log("ComputerChoice",computerchoice);
    let userwin=true;
    if(userChoice==computerchoice){
        draw();
    }
    else{
        if(userChoice=="rock"){
            userwin=computerchoice=="paper"? false:true;
        }
        else if(userChoice=="paper"){
            userwin=computerchoice=="scissor"?false:true;

        }
        else{
            userwin=computerchoice=="rock"?false:true;
        }
    }
    showWinner(userwin,userChoice,computerchoice);

}
const draw=()=>{
   console.log("Game was draw");
   msg.innerText="Game was Draw!.Please play Again";
}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});
const gencomputerchoice=()=>{
   const options=["rock","paper","scissor"];
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];

};