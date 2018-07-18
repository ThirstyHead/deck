'use strict';

const SUITES = Object.freeze({
  SPADES   : {name:'spades', color:'black'},
  HEARTS   : {name:'hearts', color:'red'},
  DIAMONDS : {name:'diamonds', color:'red'},
  CLUBS    : {name:'clubs', color:'black'}
});

const RANKS = Object.freeze({
  TWO   : {name:'deuce', rank:1},
  THREE : {name:'three', rank:2},
  FOUR  : {name:'four', rank:3},
  FIVE  : {name:'five', rank:4},
  SIX   : {name:'six', rank:5},
  SEVEN : {name:'seven', rank:6},
  EIGHT : {name:'eight', rank:7},
  NINE  : {name:'nine', rank:8},
  TEN   : {name:'ten', rank:9},
  JACK  : {name:'jack', rank:10},
  QUEEN : {name:'queen', rank:11},
  KING  : {name:'king', rank:12},
  ACE   : {name:'ace', rank:13}
});

export class Card{
  constructor(suite, rank){
    if(SUITES.hasOwnProperty(suite)){
      Object.defineProperty(this, 'suite', {
        value: suite,
        enumerable: true,
        writable: false,
        configurable: false
      });
    }else{
      throw new TypeError(`${suite} must be in Card.SUITES`);
    }

    if(RANKS.hasOwnProperty(rank)){
      Object.defineProperty(this, 'rank', {
        value: rank,
        enumerable: true,
        writable: false,
        configurable: false
      });
    }else{
      throw new TypeError(`${rank} must be in Card.RANKS`);
    }
  }

  static get SUITES(){
    return SUITES;
  }

  static get RANKS(){
    return RANKS;
  }
}
