pc="";
cc="";
pscore=0;
cscore=0;
roundcomplete=false;

btn=document.querySelector(".playerchoice");
btn.addEventListener("click",getplayerchoice);

function resetgame(){
    p1=document.querySelector(".inner");
    r1=document.querySelector(".displayc");
    p1.removeChild(r1);
    p2=document.querySelector(".ans");
    r2=document.querySelector(".resultdisplay");
    p2.removeChild(r2);
    p3=document.querySelector(".score");
    r3=document.querySelector(".playagainbtn");
    p3.removeChild(r3);
    roundcomplete=false;
}

function createPlayAgainButton(){
    console.log("PLAY BUTTON CALLED");
    buttonSpace=document.querySelector(".score");
    button=document.createElement("button");
    button.className="playagainbtn";
    let text=document.createTextNode("PLAY AGAIN");
    button.appendChild(text);
    buttonSpace.appendChild(button);
}

function displayResult(result){
    resultspace=document.querySelector(".ans");
    resultbox=document.createElement("div");
    resultbox.className="resultdisplay";
    if(result==="win"){
        let text=document.createTextNode("YOU WON SOMEHOW!");
        globalThis.pscore++;
        resultbox.appendChild(text);
    }
    else if(result==="lose"){
        let text=document.createTextNode("YOU LOST NOOB!");
        resultbox.appendChild(text);
    }
    else{
        let text=document.createTextNode("MATCH DRAWN (NOOB)!");
        resultbox.appendChild(text);
    }
    resultspace.appendChild(resultbox);
    roundcomplete=true;
}

function computerPlay(){
    let number=Math.floor(Math.random()*3);
    let computerchoice=document.querySelector(".inner");
    let display=document.createElement("div");
    display.className="displayc";
    if(number==0){
        let text=document.createTextNode("ROCK");
        display.appendChild(text);
        computerchoice.appendChild(display);
        return "rock";
    }
    else if(number==1){
        let text=document.createTextNode("PAPER");
        display.appendChild(text);
        computerchoice.appendChild(display);
        return "paper";
    }
    else {
        let text=document.createTextNode("SCISSORS");
        display.appendChild(text);
        computerchoice.appendChild(display);
        return "scissors";
    }
}

function playRound(player,computer){
    player=player.toLowerCase();
    computer=computer.toLowerCase();
    console.log("Computer Drew: "+computer);
    if(player==="rock"){
        if(computer==="rock"){
            displayResult("draw");
            return "It's a draw!";
        }
        else if(computer==="paper"){
            displayResult("lose");
            return "You Lose!";
        }
        else{
            displayResult("win");
            return "You win!";
        }
    }   
    if(player==="scissors"){
        if(computer==="scissors"){
            displayResult("draw");
            return "It's a draw!";
        }
        else if(computer==="rock"){
            displayResult("lose");
            return "You Lose!";
        }
        else{
            displayResult("win");
            return "You win!";
        }
    }
    if(player==="paper"){
        if(computer==="paper"){
            displayResult("draw");
            return "It's a draw!";
        }
        else if(computer==="scissors"){
            displayResult("lose");
            return "You Lose!";
        }
        else{
            displayResult("win");
            return "You win!";
        }
    }
}

function getplayerchoice(e){
    if(roundcomplete==false){
        if(e.target.classList.contains("rock")){
            globalThis.pc="rock";
        }
        else if(e.target.classList.contains("paper")){
            globalThis.pc="paper";
        }
        else if(e.target.classList.contains("scissors")){
            globalThis.pc="scissors";
        }
        globalThis.cc=computerPlay();
        console.log(playRound(pc,cc));
        createPlayAgainButton();
        let txt=document.createTextNode(globalThis.pscore);
        scorespace=document.querySelector(".currentscore");
        scorespace.innerHTML=globalThis.pscore;
        btn=document.querySelector(".playagainbtn");
        btn.addEventListener("click",resetgame);
    }
}