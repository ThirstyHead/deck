'use strict';

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

tests.set("player can draw() and play() cards", () => {
  const p = new Player('Suzi');
  const initialCount = p.hand.cardCount;
  p.hand.draw('card1');
  p.hand.draw('card2');
  const cardCountAfterDrawing = p.hand.cardCount;
  p.hand.play();
  const cardCountAfterPlaying = p.hand.cardCount;

  return 0 === initialCount &&
         2 === cardCountAfterDrawing &&
         1 === cardCountAfterPlaying;
});

tests.set("new players have separate private decks", () => {
  const p1 = new Player('Suzi');
  const p2 = new Player('John');

  const initialCount = p1.hand.cardCount;
  p1.hand.draw('cardXXX');
  const cardCountAfterDrawing = p1.hand.cardCount;

  return 0 === initialCount &&
         1 === cardCountAfterDrawing &&
         0 === p2.hand.cardCount;
});
