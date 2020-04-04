import { getRandomArbitrary } from './solver';

const generateHand = (size) => {
  let deck = new Array(52)
    .fill('H', 0, 13)
    .fill('S', 13, 26)
    .fill('C', 26, 39)
    .fill('D', 39, 52);
  const hand = [];
  for (let x = 1; x <= size; x++) {
    hand.push(deck.splice(getRandomArbitrary(0, 52 - hand.length), 1)[0]);
    // console.log(`deck.length: ${deck.length}`);
  }
  return hand;
};

export { generateHand };
