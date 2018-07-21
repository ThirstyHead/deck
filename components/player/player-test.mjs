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
  const initialCount = p.cardCount;
  p.draw('card1');
  p.draw('card2');
  const cardCountAfterDrawing = p.cardCount;
  p.play();
  const cardCountAfterPlaying = p.cardCount;

  return 0 === initialCount &&
         2 === cardCountAfterDrawing &&
         1 === cardCountAfterPlaying;
});
