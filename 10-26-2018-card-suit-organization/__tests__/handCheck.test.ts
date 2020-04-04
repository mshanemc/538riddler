import { isHandOK } from '../handCheck';

test('randomHand', () => {
  expect(isHandOK(['H', 'H', 'C', 'D', 'H', 'S'])).toBe(false);
});

test('goodHand', () => {
  expect(isHandOK(['H', 'H', 'C', 'C', 'D', 'S'])).toBe(true);
});

test('goodButNoColoredRight', () => {
  expect(isHandOK(['H', 'H', 'D', 'D', 'C', 'S'])).toBe(false);
});

test('notColoredRightButStillOK', () => {
  expect(isHandOK(['H', 'H', 'H', 'D', 'D', 'D'])).toBe(true);
  expect(isHandOK(['C', 'C', 'C', 'S', 'S', 'S'])).toBe(true);
});
