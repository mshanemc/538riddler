const isHandOK = (hand: String[]) => {
  let suitsAlreadySeen = new Set();
  // suits are grouped together
  try {
    hand.forEach((card, index) => {
      if (
        suitsAlreadySeen.has(card) &&
        index !== 0 &&
        card !== hand[index - 1]
      ) {
        throw new Error(
          `failed on card ${index} (${card}) and suitAlreadySeen is ${[
            ...suitsAlreadySeen,
          ]}`
        );
      }
      suitsAlreadySeen.add(card);
    });
    // TODO: check adjacent colors
    if (
      hand.some((card) => getColor(card) === 'red') &&
      hand.some((card) => getColor(card) === 'black')
    ) {
      hand.forEach((card, index) => {
        if (
          index > 0 &&
          card !== hand[index - 1] &&
          getColor(card) === getColor(hand[index - 1])
        ) {
          throw new Error('two consecutive cards of same colors');
        }
      });
    }
    return true;
  } catch (err) {
    // console.log(err);
  }
  return false;
};

const getColor = (card) => {
  if (card === 'H' || card === 'D') return 'red';
  else return 'black';
};

export { isHandOK };
