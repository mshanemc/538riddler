// https://fivethirtyeight.com/features/can-you-decode-the-riddler-lottery/
import { Combo, hasAtLeast25Numbers } from './ArraysWithNoNumbersInCommon';
const numbers = [];
const primes = [];

for (let number = 2; number <= 70; number++) {
  let isPrime = true;
  for (let prime of primes) {
    if (number % prime === 0 && isPrime) {
      numbers.push(number);
      isPrime = false;
    }
  }
  if (isPrime) {
    primes.push(number);
  }
}

// console.log(numbers.join(','));
// console.log(primes.join(','));

const listOfCompositeNumbers: number[] = numbers.filter(number => {
  // has at least two distinct prime factors
  let factors = 0;
  for (let prime of primes) {
    if (number % prime === 0) {
      factors++;
    }
  }
  return factors >= 2;
});

console.log(
  `possible numbers (composites of 2+ primes): ${listOfCompositeNumbers.join()}`
);

interface CombosByProduct {
  [key: number]: Combo[];
}

const combosByProduct: CombosByProduct = {};

for (let a of listOfCompositeNumbers) {
  for (let b of listOfCompositeNumbers) {
    if (b > a) {
      for (let c of listOfCompositeNumbers) {
        if (c > b) {
          for (let d of listOfCompositeNumbers) {
            if (d > c) {
              for (let e of listOfCompositeNumbers) {
                if (e > d) {
                  const newCombo = {
                    numbers: [a, b, c, d, e],
                    product: a * b * c * d * e
                  };
                  if (combosByProduct[newCombo.product]) {
                    combosByProduct[newCombo.product].push(newCombo);
                  } else {
                    combosByProduct[newCombo.product] = [newCombo];
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

console.log(`possible products: ${Object.keys(combosByProduct).length}`);

const setsOf5Plus = [];
for (const product of Object.keys(combosByProduct)) {
  if (combosByProduct[product].length >= 5) {
    setsOf5Plus.push(combosByProduct[product]);
  }
}

console.log(
  `there are ${setsOf5Plus.length} combinations with 5 or more solutions that have the same product`
);

const productsOfSetsOf5PlusWithEnoughUniqueNumbers = setsOf5Plus.filter(
  setOf5 => hasAtLeast25Numbers(setOf5)
);

console.log(
  `there are ${productsOfSetsOf5PlusWithEnoughUniqueNumbers.length} products with at least 25 unique numbers`
);

const productsWith25PlusNumbers = new Set([]);
for (const setOf5 of productsOfSetsOf5PlusWithEnoughUniqueNumbers) {
  for (const combo of setOf5) {
    productsWith25PlusNumbers.add(combo.product);
  }
}

console.log(productsWith25PlusNumbers);
