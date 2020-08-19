/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


/*
Your 3rd Challenge

1. A player looses his Entire score when he rolls two 6 in a row. After that, its the next player's
turn.
2. Add an input field to the HTML where player can set the winnings score, so that they can change the
predefined score of 100. use (.value) property
3. Add another dice to the game. so that there are two dices now. The player looses hos current score when
one of them is a 1.
*/

var score, roundScore, activePlayer, gamePlaying, lastDice;

init();

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying){
    //Do something
    // 1. Random number
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    // 2. Display the result
    // show the dice images
    // var diceDOM = document.querySelector('.dice');
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    // 3. Update the round score if the rolled number was not 1
    if (dice1 !== 1 && dice2 !== 1){
      //Add score
      roundScore += dice1 + dice2;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else{
      //next player
      nextPlayer();
    }
    /*
    if(dice == 6 && lastDice == 6){
      //player looses score
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer();

    } else if
      (dice !== 1){
      //Add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;

    }else{
      //next player
      nextPlayer();
    }
    lastDice = dice;
    */
  }

});


document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
    // 1. Add current score to the global score.
    scores[activePlayer] += roundScore;

    // 2. Update the UI.
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('.final-score').value;
    var winningScore;
    //Undefined, 0, null or "" are coerced to false
    //Anything else is Coerced to true.

    if(input){
      winningScore = input;
    }else{
      winningScore = 100;
    }

    // 3. Check if player won the game.

    if(scores[activePlayer] >= winningScore){
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!'

      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';

      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
      gamePlaying = false;
    }else{
      nextPlayer();
    }
  }


});


function nextPlayer(){
  //Next player
  activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.btn-roll').style.display = 'block';
  document.querySelector('.btn-hold').style.display = 'block';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}















// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'</em>';
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
