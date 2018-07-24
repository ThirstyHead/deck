'use strict';

import {Deck} from '/components/deck/deck.mjs';
import {Card} from '/components/card/card.mjs';
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

    while(deck.cards.cardCount > 0){
      currentPlayer.hand.draw(deck.cards.deal());

      if(currentPlayer === this.player1){
        currentPlayer = this.player2;
      }else{
        currentPlayer = this.player1;
      }
    }
  }

  playRound(){
    if(this.roundsRemaining > 0){
      const round = {
        number: this.history.length,
        plays: [],
        winner: undefined
      };

      while(round.winner === undefined){
        const play = {
          number: round.plays.length
        };
        const card1 = this.player1.hand.play();
        const card2 = this.player2.hand.play();
        play[this.player1.name] = card1;
        play[this.player2.name] = card2;
        round.plays.push(Object.freeze(play));

        if(Card.compare(card1, card2) > 0){
          round.winner = this.player1.name;
        }

        if(Card.compare(card2, card1) > 0){
          round.winner = this.player2.name;
        }

        if(round.winner === undefined &&
           this.roundsRemaining === 0){
          round.winner = 'TIE';
        }
      }

      this.history.push(Object.freeze(round));
      return round;
    }else{
      return null;
    }
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
