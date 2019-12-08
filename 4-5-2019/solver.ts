// https://fivethirtyeight.com/features/does-your-gift-card-still-have-free-drinks-on-it/

const montecarlo = 100000;

class Wallet {
  a: number;
  b: number;

  constructor() {
    this.a = 50;
    this.b = 50;
  }

  getBalance() {
    return {
      a: this.a,
      b: this.b
    };
  }
  isOK() {
    return this.a > -1 && this.b > -1;
  }

  transact() {
    Math.random() > 0.5 ? this.a-- : this.b--;
  }
}

(async () => {
  const results = [];
  for (let i = 0; i < montecarlo; i++) {
    const wallet = new Wallet();

    while (wallet.isOK()) {
      wallet.transact();
    }

    results.push(wallet.getBalance());
  }

  const remainingDrinks = results.map(wallet => Math.max(wallet.a, wallet.b));
  const averageRemaining =
    remainingDrinks.reduce((x, y) => x + y) / results.length;
  const anyDrinks = remainingDrinks.filter(x => x > 0).length / montecarlo;

  console.log(`of 1000 tries, the other card averaged ${averageRemaining}`);
  console.log(
    `...and ${anyDrinks}% of the time there was at least one drink on the other card.`
  );
})();
