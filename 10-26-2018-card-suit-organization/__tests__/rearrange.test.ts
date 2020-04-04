import { handRearranger } from '../handRearranger';

test.only('combo size', () => {
  const originalHand = ['H', 'H', 'H', 'H', 'H', 'H'];
  expect(handRearranger(originalHand).length).toBe(70);
});

test('hand size / identity', () => {
  const originalHand = ['H', 'H', 'H', 'H', 'H', 'H'];
  const rearrangedHands = handRearranger(originalHand);
  expect(
    rearrangedHands.every((hand) => hand.length === originalHand.length)
  ).toBe(true);
});

test('hand single', () => {
  const originalHand = ['S', 'H', 'H', 'H', 'H', 'H'];
  const rearrangedHands = handRearranger(originalHand);
  console.log(rearrangedHands);
  expect(rearrangedHands.includes(['H', 'S', 'H', 'H', 'H', 'H']));
  expect(rearrangedHands.includes(['H', 'H', 'S', 'H', 'H', 'H']));
  expect(rearrangedHands.includes(['H', 'H', 'H', 'S', 'H', 'H']));
  expect(rearrangedHands.includes(['H', 'H', 'H', 'H', 'S', 'H']));
  expect(rearrangedHands.includes(['H', 'H', 'H', 'H', 'H', 'S']));
});
