function buttonClickBotMove() {
    let computerMove = '';
    let range = Math.random();
    if(range >= 0 && range < 1/3) {
        computerMove = "rock"
    }
    else if(range >= 1/3 && range < 2/3) {
        computerMove = "paper"
    }
    else if(range >= 2/3 && range < 1) {
        computerMove = "scissor"
    }
    return computerMove;
}


function playGame(playerMove){
    let computerMove = buttonClickBotMove();
    if (playerMove === 'rock'){
        if(computerMove === 'rock'){
            return `You chose ${playerMove}. Bot chose ${computerMove}. Tie`
        } else if (computerMove === 'paper'){
            return `You chose ${playerMove}. Bot chose ${computerMove}. Lose`
        } else if (computerMove === 'scissor'){
            return `You chose ${playerMove}. Bot chose ${computerMove}. Win`
        }
    }
    if (playerMove === 'paper'){
        if(computerMove === 'rock'){
            return `You chose ${playerMove}. Bot chose ${computerMove}. Win`
        } else if (computerMove === 'paper'){
            return `You chose ${playerMove}. Bot chose ${computerMove}. Tie`
        } else if (computerMove === 'scissor'){
            return `You chose ${playerMove}. Bot chose ${computerMove}. Lose`
        }
    }
    if (playerMove === 'scissor'){
        if(computerMove === 'rock'){
            return `You chose ${playerMove}. Bot chose ${computerMove}. Lose`
        } else if (computerMove === 'paper'){
            return `You chose ${playerMove}. Bot chose ${computerMove}. Win`
        } else if (computerMove === 'scissor'){
            return `You chose ${playerMove}. Bot chose ${computerMove}. Tie`
        }
    }
}

console.log(playGame('rock'));