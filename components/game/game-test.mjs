'use strict';

import {Game} from '/components/game/game.mjs';
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
  const p1 = new Player('Suzi');
  const p2 = new Player('John');
  const game = new Game(p1, p2);

  game.start();
  return p1.hand.cardCount === 26 &&
         p2.hand.cardCount === 26;
});
