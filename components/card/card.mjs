const SUITES = Object.freeze({
  SPADES   : {name:'spades', color:'black'},
  HEARTS   : {name:'hearts', color:'red'},
  DIAMONDS : {name:'diamonds', color:'red'},
  CLUBS    : {name:'clubs', color:'black'}
});

const RANKS = Object.freeze({
  TWO   : {name:'deuce', value:2, display:'2'},
  THREE : {name:'three', value:3, display:'3'},
  FOUR  : {name:'four', value:4, display:'4'},
  FIVE  : {name:'five', value:5, display:'5'},
  SIX   : {name:'six', value:6, display:'6'},
  SEVEN : {name:'seven', value:7, display:'7'},
  EIGHT : {name:'eight', value:8, display:'8'},
  NINE  : {name:'nine', value:9, display:'9'},
  TEN   : {name:'ten', value:10, display:'10'},
  JACK  : {name:'jack', value:11, display:'J'},
  QUEEN : {name:'queen', value:12, display:'Q'},
  KING  : {name:'king', value:13, display:'K'},
  ACE   : {name:'ace', value:14, display:'A'}
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

    Object.defineProperty(this, 'value', {
      value: RANKS[this.rank].value,
      enumerable: true,
      writable: false,
      configurable: false
    });
  }

  toString(){
    return `${RANKS[this.rank].name} of ${SUITES[this.suite].name}`
  }

  compare(otherCard){
    return Card.compare(this, otherCard);
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

  static compare(aCard, otherCard){
    return aCard.value - otherCard.value;
  }
}
