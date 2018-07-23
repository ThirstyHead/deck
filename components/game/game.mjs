'use strict';

import {Deck} from '/components/deck/deck.mjs';
import {Player} from '/components/player/player.mjs';

export class Game{
  constructor(name1, name2){
    this.player1 = new Player(name1);
    this.player2 = new Player(name2);
    this.history = [];
  }

  start(){
    let deck = new Deck();
    let currentPlayer = this.player1;

    while(deck.cards.cardCount() > 0){
      currentPlayer.hand.draw(deck.cards.deal());

      if(currentPlayer === this.player1){
        currentPlayer = this.player2;
      }else{
        currentPlayer = this.player1;
      }
    }
  }

  playRound(){
    if( this.roundsRemaining > 0){
      const card1 = this.player1.hand.play();
      const card2 = this.player2.hand.play();
      let winner = undefined;

      if(card1.value > card2.value){
        winner = this.player1.name;
      }

      if(card1.value < card2.value){
        winner = this.player2.name;
      }

      if(card1.value === card2.value){
        winner = "TIE";
      }

      const round = {};
      round[this.player1.name] = card1;
      round[this.player2.name] = card2;
      round.winner = winner;
      round.round = this.history.length;
      Object.freeze(round);

      this.history.push(round);
    }else{
      Object.freeze(this.history);
    }

    return this.history;
  }

  get roundsRemaining(){
    return this.player1.hand.cardCount;
  }

  get scores(){
    const scores1 = this.history.filter( (it) => {
      return it.winner === this.player1.name;
    });

    const scores2 = this.history.filter( (it) => {
      return it.winner === this.player2.name;
    });

    const ties = this.history.filter( (it) => {
      return it.winner === 'TIE';
    });

    let result = {};
    result[this.player1.name] = scores1;
    result[this.player2.name] = scores2;
    result['TIES'] = ties;
    return result;
  }
}
