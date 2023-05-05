import { ticTacToeSpot } from "./staticEvaluation";
import getPlayerCounts from "./playerCounts";

const combinationWeights = [1, 4, 12];
const possibleCombinationsByIndex = {
  0: [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
  ],
  1: [
    [0, 1, 2],
    [1, 4, 7],
  ],
  2: [
    [0, 1, 2],
    [2, 5, 8],
    [2, 4, 6],
  ],
  3: [
    [3, 4, 5],
    [0, 3, 6],
  ],
  4: [
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
  ],
  5: [
    [3, 4, 5],
    [2, 5, 8],
  ],
  6: [
    [6, 7, 8],
    [0, 3, 6],
    [2, 4, 6],
  ],
  7: [
    [6, 7, 8],
    [1, 4, 7],
  ],
  8: [
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
  ],
};

const getWeights = (board: number[], index: ticTacToeSpot): number[] => {
  if (board[index] !== 0) return [0, 0];

  const possibleCombinations: number[][] = possibleCombinationsByIndex[index];
  const numCombinations1 = [0, 0, 0];
  const numCombinations2 = [0, 0, 0];

  possibleCombinations.forEach((combination) => {
    const [player1Count, player2Count] = getPlayerCounts(board, combination);

    if (player1Count === 2 && player2Count === 0) {
      numCombinations1[2]++;
    } else if (player1Count === 0 && player2Count === 2) {
      numCombinations2[2]++;
    } else if (player1Count === 1 && player2Count === 0) {
      numCombinations1[1]++;
    } else if (player1Count === 0 && player2Count === 1) {
      numCombinations2[1]++;
    } else if (player1Count === 0 && player2Count === 0) {
      numCombinations1[0]++;
      numCombinations2[0]++;
    }
  });

  const weight1 = getDotProduct(combinationWeights, numCombinations1);
  const weight2 = getDotProduct(combinationWeights, numCombinations2);

  return [weight1, weight2];
};

const getDotProduct = (arr1: number[], arr2: number[]): number => {
  let dotProduct = 0;

  for (let i = 0; i < arr1.length; i++) {
    dotProduct += arr1[i] * arr2[i];
  }

  return dotProduct;
};

export default getWeights;
