import {Deck} from '/components/deck/deck.mjs';
import {Card} from '/components/card/card.mjs';
import {Player} from '/components/player/player.mjs';

export class Game{
  constructor(name1, name2){
    this.players = new Map();
    this.players.set(name1, new Player(name1));
    this.players.set(name2, new Player(name2));
    this.history = [];
  }

  start(){
    let deck = new Deck();
    while(deck.cards.cardCount > 0){
      this.players.forEach( (currentPlayer) => {
        currentPlayer.hand.draw(deck.cards.deal());
      });
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
        const [player1, player2] = this.players.values();

        const card1 = player1.hand.play();
        const card2 = player2.hand.play();
        const play = {};
        play[player1.name] = card1;
        play[player2.name] = card2;
        play.number = round.plays.length;
        round.plays.push(Object.freeze(play));

        if(Card.compare(card1, card2) > 0){
          round.winner = player1.name;
        }

        if(Card.compare(card2, card1) > 0){
          round.winner = player2.name;
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
    const [player1, player2] = this.players.values();
    return player1.hand.cardCount;
  }

  get scores(){
    let result = {};
    this.players.forEach( (currentPlayer) => {
      const scores = this.history.filter( (it) => {
        return it.winner === currentPlayer.name;
      });
      result[currentPlayer.name] = scores;
    });

    const ties = this.history.filter( (it) => {
      return it.winner === 'TIE';
    });
    result['TIES'] = ties;

    return result;
  }
}
