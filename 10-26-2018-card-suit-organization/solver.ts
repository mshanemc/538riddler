// TODO hand rearranger
import { isHandOK } from './handCheck';
import { generateHand } from './generateHand';
import { handRearranger } from './handRearranger';

const handSize = 8;

export const getRandomArbitrary = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// const hand = generateHand(handSize);
// console.log(`original hand: ${hand}`);
// const combos = handRearranger(hand);

// const validHands = combos.filter((combo) => isHandOK(combo));
// console.log('valid hands are');
// console.log(validHands);
// const handHasValidRearrangement = combos.some((hand) => isHandOK(hand));

const tries = 10000;

const handsToCheck = [];
for (let x = 0; x < tries; x++) {
  handsToCheck.push(generateHand(handSize));
}
const goodHands = handsToCheck.filter((hand) => handRearranger(hand));
console.log(
  `this many good hands: ${goodHands.length} or ${
    (goodHands.length / tries) * 100
  }%`
);
