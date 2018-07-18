'use strict';

import {Card} from './card.mjs';
export {tests, test};

let tests = new Map();

tests.set("it should have 4 suites", () => {
  return Object.keys(Card.SUITES).length === 4 &&
         Card.SUITES.hasOwnProperty('HEARTS') &&
         Card.SUITES.hasOwnProperty('SPADES') &&
         Card.SUITES.hasOwnProperty('CLUBS') &&
         Card.SUITES.hasOwnProperty('DIAMONDS');
});

tests.set("you cannot change the suites", () => {
  try{
    Card.SUITES = 'foo';
    return false; // due to expected error,
                  // this line should never be reached
  }catch(error){
    // console.log(error);
    return error.name === 'TypeError';
  }
});

tests.set("you cannot add a new suite", () => {
  try{
    Card.SUITES.FOO = {name:'foo'};
    return false;
  }catch(error){
    return error.name === 'TypeError';
  }
});

tests.set("you cannot change an existing suite", () => {
  try{
    Card.SUITES.HEARTS = {name:'foo'};
    return false;
  }catch(error){
    return error.name === 'TypeError';
  }
});


function test(){
  let results = [];
  tests.forEach( (test, name) => {
    results.push(`[${test()}] ${name}`);
  });
  return results;
}
