// https://fivethirtyeight.com/features/how-fast-can-you-skip-to-your-favorite-song/

class IPod {
  _current: number;

  constructor() {
    this._current = this.randomBetween();
  }

  getCurrent() {
    return this._current;
  }

  next() {
    this._current++;
  }

  random() {
    this._current = this.randomBetween();
  }

  randomBetween = (min: number = 1, max: number = 100) => {
    return Math.ceil(Math.random() * 100);
  };
}

(async () => {
  const goal = 42;
  let metaresults = [];
  for (let threshhold = 4; threshhold < 20; threshhold++) {
    let results = [];

    for (let montecarlo = 0; montecarlo < 1000000; montecarlo++) {
      let i = new IPod();
      let path = [];
      do {
        if (i.getCurrent() < goal && goal - i.getCurrent() < threshhold) {
          i.next();
        } else {
          i.random();
        }
        path.push(i.getCurrent());
      } while (i.getCurrent() !== goal);
      results.push(path.length);
    }
    metaresults.push({
      threshhold,
      value: results.reduce((a, b) => a + b, 0) / results.length
    });
  }
  console.log(metaresults);
})();
