const listSize19 = 100000;
const listSize538 = 10000;
const listSize101 = listSize19;

const multipleOf19 = [];
const multipleOf538 = [];
const multipleOf101 = [];

const startNumber = 1000;
const stopNumber = 100000000;

for (let x = 1; x <= listSize19; x++) {
  multipleOf19.push(x * 19);
}

for (let x = 1; x <= listSize538; x++) {
  multipleOf538.push(x * 538);
}

for (let x = 1; x <= listSize101; x++) {
  multipleOf101.push(x * 101);
}

// console.log(multipleOf19);
// console.log(multipleOf538);

const canIMakeExactChange = input => {
  if (input % 19 === 0 || input % 538 === 0 || input % 101 === 0) {
    // console.log(`skipping ${input} b/c multiple of 19 or 538`);
    return true;
  }
  for (let x of multipleOf19) {
    if (
      multipleOf538.includes(input - x) ||
      multipleOf101.includes(input - x)
    ) {
      //   console.log(`skipping ${input} because subtract ${x} is ${input - x}`);
      return true;
    }
    if (x > input) break;
  }

  for (let x of multipleOf538) {
    if (multipleOf19.includes(input - x) || multipleOf101.includes(input - x)) {
      //   console.log(`skipping ${input} because subtract ${x} is ${input - x}`);
      return true;
    }
    if (x > input) break;
  }

  for (let x of multipleOf101) {
    if (multipleOf19.includes(input - x) || multipleOf538.includes(input - x)) {
      //   console.log(`skipping ${input} because subtract ${x} is ${input - x}`);
      return true;
    }
    if (x > input) break;
  }

  console.log(`you cannot produce exact change for ${input}`);
  return false;
};

// const testNumber = 558;
// console.log(` can I do ${testNumber}? ${canIMakeExactChange(testNumber)}`);

let biggestNumberSoFar = 0;

for (let x = startNumber; x < stopNumber; x++) {
  if (!canIMakeExactChange(x)) {
    biggestNumberSoFar = x;
    console.log(x);
  }
  if (x % 1000 === 0) {
    console.log(`x is ${x}`);
  }
}

// answer is 9665
// extra credit 1799
