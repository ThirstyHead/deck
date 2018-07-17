'use strict';

const SUITES = Object.freeze({
  SPADES   : {name:'spades'},
  HEARTS   : {name:'hearts'},
  DIAMONDS : {name:'diamonds'},
  CLUBS    : {name:'clubs'}
});

export class Card{
  static get SUITES(){
    return SUITES;
  }
}
