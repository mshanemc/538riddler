import { isHandOK } from './handCheck';

const handRearranger = (hand) => {
  if (isHandOK(hand)) {
    return true;
  }

  const handSize = hand.length;

  for (let groupSize = 1; groupSize < handSize; groupSize++) {
    for (
      let originalPosition = 0;
      originalPosition < handSize - groupSize;
      originalPosition++
    ) {
      let copiedHand = [...hand];
      const removed = copiedHand.splice(originalPosition, groupSize);
      for (
        let newPosition = 0;
        newPosition <= handSize - (groupSize - 1);
        newPosition++
      ) {
        let handWithCardRemoved = [...copiedHand];
        if (originalPosition !== newPosition) {
          //   console.log(
          //     `group of ${groupSize} moved from ${originalPosition} to ${newPosition}`
          //   );
          handWithCardRemoved.splice(newPosition, 0, ...removed);
          if (isHandOK(handWithCardRemoved)) {
            return true;
          }
        }
      }
    }
  }

  return false;
};

export { handRearranger };
