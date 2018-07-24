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

        get cardCount(){
          return privateHand.length;
        }
      };
    }());
  }
}
