'use strict';

function addFour(n) {
  return n + 4;
}

var twelveString = String(addFour(80));

function compoundInterest(principal, rate, years) {
  return principal * Math.exp(rate * years);
}

function fizzBuzz(n) {
  var out = [];
  for (var i = 1; i <= n; i++) {
    var val = '';
    if (i % 3 === 0) val += 'Fizz';
    if (i % 5 === 0) val += 'Buzz';
    out.push(val === '' ? i : val);
  }
  return out;
}

function getLetterFrequencies(str) {
  var freq = {};
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (!freq[ch]) {
      freq[ch] = 1;
    } else {
      freq[ch] += 1;
    }
  }
  return freq;
}

var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
var deck = [];
for (var s = 0; s < suits.length; s++) {
  for (var r = 2; r <= 14; r++) {
    deck.push({ rank: r, suit: suits[s] });
  }
}

function containsQueenOfHearts(hand) {
  for (var i = 0; i < hand.length; i++) {
    var c = hand[i];
    if (c.rank === 12 && c.suit === 'hearts') {
      return true;
    }
  }
  return false;
}

function getHighCard(hand) {
  var best = hand[0];
  for (var i = 1; i < hand.length; i++) {
    if (hand[i].rank > best.rank) {
      best = hand[i];
    }
  }
  return best;
}

function isFlush(hand) {
  if (hand.length === 0) return false;
  var s0 = hand[0].suit;
  for (var i = 1; i < hand.length; i++) {
    if (hand[i].suit !== s0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  addFour: addFour,
  twelveString: twelveString,
  compoundInterest: compoundInterest,
  fizzBuzz: fizzBuzz,
  getLetterFrequencies: getLetterFrequencies,
  deck: deck,
  containsQueenOfHearts: containsQueenOfHearts,
  getHighCard: getHighCard,
  isFlush: isFlush
};