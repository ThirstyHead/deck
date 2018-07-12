'use strict';

import {Card} from './card.mjs';
export {tests, test};

let tests = new Map();

tests.set("it should have 4 suites", () => {
  return Card.SUITES.includes(Card.SPADES) &&
         Card.SUITES.includes(Card.HEARTS) &&
         Card.SUITES.includes(Card.DIAMONDS) &&
         Card.SUITES.includes(Card.CLUBS) &&
         Card.SUITES.length === 4;
})

function test(){
  let results = [];
  tests.forEach( (test, name) => {
    results.push(`[${test()}] ${name}`);
  });
  return results;
}
