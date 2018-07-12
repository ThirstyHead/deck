'use strict';

const SPADES = 'spades';
const HEARTS = 'hearts';
const DIAMONDS = 'diamonds';
const CLUBS = 'clubs';
const SUITES = [SPADES, HEARTS, DIAMONDS, CLUBS];


export class Card{
  constructor(suite=Card.SPADES){
    this.suite = suite;
  }

  static get SPADES(){
    return SPADES;
  }

  static get HEARTS(){
    return HEARTS;
  }

  static get DIAMONDS(){
    return DIAMONDS;
  }

  static get CLUBS(){
    return CLUBS;
  }

  static get SUITES(){
    return SUITES;
  }
}
