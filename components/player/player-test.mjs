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
  const playedCard = p.hand.play();
  const cardCountAfterPlaying = p.hand.cardCount;

  return 0 === initialCount &&
         2 === cardCountAfterDrawing &&
         1 === cardCountAfterPlaying &&
         playedCard === 'card1';
});

tests.set("new players have separate private decks", () => {
  const p1 = new Player('Suzi');
  const p2 = new Player('John');

  p1.hand.draw('cardXXX');
  p2.hand.draw('cardYYY');
  p2.hand.draw('cardZZZ');

  return p1.hand.cardCount === 1 &&
         p1.hand.play() === 'cardXXX' &&
         p2.hand.cardCount === 2 &&
         p2.hand.play() === 'cardYYY' &&
         p2.hand.play() === 'cardZZZ';
});
