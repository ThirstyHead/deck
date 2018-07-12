'use strict';
import {test as deckTest} from './deck-test.mjs';
import {test as cardTest} from './card-test.mjs';

console.log('deck-test');
console.log('='.repeat(9));
console.log(deckTest());
console.log('');

console.log('card-test');
console.log('='.repeat(9));
console.log(cardTest());
