'use strict';

import {Game} from '/components/game/game.mjs';
import {Card} from '/components/card/card.mjs';
import {Player} from '/components/player/player.mjs';

export {tests, test};

let tests = new Map();

function test(){
  let results = [];
  tests.forEach( (test, name) => {
    results.push(`[${test()}] ${name}`);
  });
  return results;
}

/********** TESTS **********/

tests.set("game.start() deals the cards to the players", () => {
  const game = new Game('Suzi', 'John');
  game.start();
  return game.player1.hand.cardCount === 26 &&
         game.player2.hand.cardCount === 26;
});

tests.set("game.playRound() plays one card from each player and returns the winner", () => {
  const game = new Game('Suzi', 'John');
  game.start();
  const results = game.playRound();
  const firstResult = results[0];
  const suziCard = firstResult['Suzi'];
  const johnCard = firstResult['John'];
  let testWinner = undefined;
  if(Card.compare(suziCard, johnCard) > 0){
    testWinner = 'Suzi';
  }else if(Card.compare(johnCard, suziCard) > 0){
    testWinner = 'John';
  }else{
    testWinner = 'TIE';
  }

  return results.length === 1 &&
         testWinner === firstResult.winner;
});

tests.set("game.scores returns the current scores", () => {
  const game = new Game('Suzi', 'John');
  game.start();
  while(game.roundsRemaining > 0){
    game.playRound();
  }

  const scores = game.scores;
  console.log(scores);
  return scores.hasOwnProperty('Suzi') &&
         scores.hasOwnProperty('John');
});
