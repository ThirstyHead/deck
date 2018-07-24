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
  const round = game.playRound();
  const finalPlay = round.plays[round.plays.length - 1];
  const suziCard = finalPlay['Suzi'];
  const johnCard = finalPlay['John'];
  let testWinner = undefined;
  if(Card.compare(suziCard, johnCard) > 0){
    testWinner = 'Suzi';
  }

  if(Card.compare(johnCard, suziCard) > 0){
    testWinner = 'John';
  }

  return testWinner === round.winner;
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
