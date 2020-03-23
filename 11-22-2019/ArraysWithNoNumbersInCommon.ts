interface Combo {
  numbers: number[];
  product: number;
}

const hasAtLeast25Numbers = (input: Combo[]) => {
  const numbersInCombo = new Set([]);
  for (const combo of input) {
    for (const n of combo.numbers) {
      numbersInCombo.add(n);
    }
  }
  return numbersInCombo.size >= 25;
};

export { hasAtLeast25Numbers, Combo };
