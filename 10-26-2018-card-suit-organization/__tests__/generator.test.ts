import { generateHand } from '../generateHand';

test('hand size', () => {
  expect(generateHand(6)).toHaveLength(6);
  expect(generateHand(12)).toHaveLength(12);
  for (let x = 0; x < 100; x++) {
    expect(
      generateHand(6).every(
        (card) => card === 'H' || card === 'S' || card === 'D' || card === 'C'
      )
    ).toBe(true);
  }
});
