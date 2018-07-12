'use strict';

import {Deck} from './deck.mjs';
export {tests, test};

let tests = new Map();

tests.set("it should have 52 cards by default", () => {
  const d = new Deck();
  return 52 === d.cards.length;
})

function test(){
  let results = [];
  tests.forEach( (test, name) => {
    results.push(`[${test()}] ${name}`);
  });
  return results;
}
