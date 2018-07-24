import {Card} from '/components/card/card.mjs';
export {tests, test};

let tests = new Map();

function test(){
  let results = [];
  tests.forEach( (test, name) => {
    results.push(`[${test()}] ${name}`);
  });
  return results;
}

/********** TESTS ***********/

tests.set("it should have 4 suites", () => {
  return Object.keys(Card.SUITES).length === 4 &&
         Card.SUITES.hasOwnProperty('HEARTS') &&
         Card.SUITES.hasOwnProperty('SPADES') &&
         Card.SUITES.hasOwnProperty('CLUBS') &&
         Card.SUITES.hasOwnProperty('DIAMONDS');
});

tests.set("you cannot change the suites", () => {
  let result = false;
  try{
    Card.SUITES = 'foo';
  }catch(error){
    result = (error.name === 'TypeError');
  }finally{
    return result;
  }

});

tests.set("you cannot add a new suite", () => {
  let result = false;
  try{
    Card.SUITES.FOO = {name:'foo'};
  }catch(error){
    result = (error.name === 'TypeError');
  }finally{
    return result;
  }
});

tests.set("you cannot change an existing suite", () => {
  let result = false;
  try{
    Card.SUITES.HEARTS = {name:'foo'};
  }catch(error){
    result = (error.name === 'TypeError');
  }finally{
    return result;
  }
});

tests.set("it should have 13 ranks", () => {
  return Object.keys(Card.RANKS).length === 13;
});

tests.set("RANKS.ACE has the highest rank", () => {
  let result = false;
  for(let r in Card.RANKS){
    if(Card.RANKS[r] !== Card.RANKS.ACE){
      result = Card.RANKS[r].value < Card.RANKS.ACE.value;
    }
  }
  return result;
});

tests.set("the card's suite must be in Card.SUITES", () => {
  let result = false;
  try{
    let c = new Card('FOO', 'ACE');
  }catch(error){
    result = (error.name === 'TypeError')
  }finally{
    return result;
  }
});

tests.set("the card's rank must be in Card.RANKS", () => {
  let result = false;
  try{
    let c = new Card('HEARTS', 'FOO');
  }catch(error){
    result = (error.name === 'TypeError')
  }finally{
    return result;
  }
});

tests.set("the card's suite is read-only after instantiation", () => {
  let result = false;
  try{
    let c = new Card('HEARTS', 'ACE');
    c.suite = 'DIAMONDS';
  }catch(error){
    result = (error.name === 'TypeError')
  }finally{
    return result;
  }
});

tests.set("the card's rank is read-only after instantiation", () => {
  let result = false;
  try{
    let c = new Card('HEARTS', 'ACE');
    c.rank = 'TWO';
  }catch(error){
    result = (error.name === 'TypeError')
  }finally{
    return result;
  }
});

tests.set("card.compare() uses card.value for simple comparison", () => {
  const aceOfSpades = new Card('SPADES', 'ACE');
  const kingOfHearts = new Card('HEARTS', 'KING');
  const queenOfDiamonds = new Card('DIAMONDS', 'QUEEN');
  const aceOfClubs = new Card('CLUBS', 'ACE');

  return aceOfSpades.compare(kingOfHearts) > 0 &&
         Card.compare(aceOfSpades, kingOfHearts) > 0 &&
         queenOfDiamonds.compare(kingOfHearts) < 0 &&
         aceOfSpades.compare(aceOfClubs) === 0;
});

tests.set("An array of Cards will be sorted by card.value, ignoring card.suite", () => {
  const cards = [];
  cards.push(new Card('SPADES', 'ACE'));
  cards.push(new Card('HEARTS', 'KING'));
  cards.push(new Card('DIAMONDS', 'QUEEN'));
  cards.push(new Card('CLUBS', 'ACE'));

  cards.sort(Card.sort);

  return cards[0].rank === 'ACE' &&
         cards[1].rank === 'ACE' &&
         cards[2].rank === 'KING' &&
         cards[3].rank === 'QUEEN';
});
