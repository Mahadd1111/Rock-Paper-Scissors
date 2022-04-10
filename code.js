function computerPlay(){
    let number=Math.floor(Math.random()*3);
    if(number==0){return "rock";}
    else if(number==1){return "scissors";}
    else {return "paper";}
}

function playRound(player,computer){
    player=player.toLowerCase();
    computer=computer.toLowerCase();
    console.log("Computer Drew: "+computer);
    if(player==="rock"){
        if(computer==="rock"){return "It's a draw!";}
        else if(computer==="paper"){return "You Lose!";}
        else{return "You win!";}
    }   
    if(player==="scissors"){
        if(computer==="scissors"){return "It's a draw!";}
        else if(computer==="rock"){return "You Lose!";}
        else{return "You win!";}
    }
    if(player==="paper"){
        if(computer==="paper"){return "It's a draw!";}
        else if(computer==="scissors"){return "You Lose!";}
        else{return "You win!";}
    }
}

function game(){
    for(let i=0;i<5;i++){
        console.log("Round: ",i+1," ------------------");
        userInput=prompt("Enter rock/papers/scissors: ");
        compInput=computerPlay();
        console.log(playRound(userInput,compInput));
    }
}

game();