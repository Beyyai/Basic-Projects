let score = JSON.parse(localStorage.getItem
    ('score')) || {
            wins: 0,
            looses: 0,
            ties: 0

    }
  /*   
    if (!score) {
        score = {
           wins: 0,
           looses: 0,
           ties: 0 
        };
    } */
    let updateScore = document.querySelector('.js-score')
     updateScore.innerHTML = `wins: ${score.wins} loose: ${score.looses} tie: ${score.ties}` 
    

    console.log();
    function playGame (playerMove) {
    const computerMove = pickComputerMove();

     let result = '';

     if (playerMove === 'Scissors') {
        if (computerMove === 'rock') {
        result = 'You loose.'
    } else if (computerMove === 'paper') {
        result = 'You win.'
    } else if (computerMove === 'scissors') {
        result = 'Tie.'
    }

     } else if(playerMove === 'Paper'){
        if (computerMove === 'rock') {
    result = 'You win.'
     } else if (computerMove === 'paper') {
            result = 'Tie.'
    } else if (computerMove === 'scissors') {
            result = 'You loose.'
    }
    
     } else if (playerMove === 'Rock') {
        if (computerMove === 'rock') {
    result = 'Tie.'
    } else if (computerMove === 'paper') {
        result = 'You loose.'
    } else if (computerMove === 'scissors') {
        result = 'You win.'
    }
     }
    
     if (result === 'You win.') {
        score.wins +=1;
     } else if(result === 'You loose.'){
        score.looses +=1;
     } else if ( result === 'Tie.'){
        score.ties +=1;
     }
     let updateResult = document.querySelector('.js-result')
     updateResult.innerHTML = `${result}`
     
     let updateMoves = document.querySelector('.js-moves')
     updateMoves.innerHTML =  `You
    <img class="move-icon" src="./Assets/images/${playerMove}-emoji.png">
    Computer
    <img class="move-icon" src="./Assets/images/${computerMove}-emoji.png">`;

     updateScoreElement ()
     

     localStorage.setItem('score', JSON.stringify(score));
    }
    function updateScoreElement (){
        let updateScore = document.querySelector('.js-score')
        updateScore.innerHTML = `wins: ${score.wins} loose: ${score.looses} tie: ${score.ties}` 
    }
     

    function pickComputerMove () {
        let computerMove = '';
        
     const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber <2/3) {
        computerMove = 'paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors'
    }
    return computerMove;
    }
