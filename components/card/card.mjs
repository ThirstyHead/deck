'use strict';

const SUITES = Object.freeze({
  SPADES   : {name:'spades', color:'black'},
  HEARTS   : {name:'hearts', color:'red'},
  DIAMONDS : {name:'diamonds', color:'red'},
  CLUBS    : {name:'clubs', color:'black'}
});

const RANKS = Object.freeze({
  TWO   : {name:'deuce', rank:1, display:'2'},
  THREE : {name:'three', rank:2, display:'3'},
  FOUR  : {name:'four', rank:3, display:'4'},
  FIVE  : {name:'five', rank:4, display:'5'},
  SIX   : {name:'six', rank:5, display:'6'},
  SEVEN : {name:'seven', rank:6, display:'7'},
  EIGHT : {name:'eight', rank:7, display:'8'},
  NINE  : {name:'nine', rank:8, display:'9'},
  TEN   : {name:'ten', rank:9, display:'10'},
  JACK  : {name:'jack', rank:10, display:'J'},
  QUEEN : {name:'queen', rank:11, display:'Q'},
  KING  : {name:'king', rank:12, display:'K'},
  ACE   : {name:'ace', rank:13, display:'A'}
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

  toString(){
    return `${RANKS[this.rank].name} of ${SUITES[this.suite].name}`
  }

  get displaySuite(){
    return SUITES[this.suite].name;
  }

  get displayRank(){
    return RANKS[this.rank].display;
  }

  static get SUITES(){
    return SUITES;
  }

  static get RANKS(){
    return RANKS;
  }
}
