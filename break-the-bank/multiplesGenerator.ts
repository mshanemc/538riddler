import fs from 'fs';

const generateMultiples = (base = 19, quantity = 1000) => {
  const output = [];
  for (let x = 1; x <= quantity; x++) {
    output.push(x * base);
  }
  console.log(output);
  return output;
};

generateMultiples(19, 100000);
