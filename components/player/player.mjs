'use strict';



export class Player{
  constructor(name){
    this.name = name;
    this.hand = (function(){
      let privateHand = [];
      return {
        draw: function(card){
          privateHand.push(card);
        },

        play: function(){
          return privateHand.shift();
        },

        cardCount: function(){
          return privateHand.length;
        }
      };
    }());
  }
}
