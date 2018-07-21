'use strict';

let hand = [];

export class Player{
  constructor(name){
    this.name = name;
  }

  draw(card){
    hand.push(card);
  }

  play(){
    return hand.shift();
  }

  get cardCount(){
    return hand.length;
  }
}
