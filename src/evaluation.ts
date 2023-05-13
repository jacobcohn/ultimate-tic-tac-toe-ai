import getPlayerCounts from "./playerCounts";

const combinationWeights = [[1], [2], [8, 2]];
const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getEvaluations = (board: number[], isWeight0: boolean): number[] => {
  if (isWeight0) return [0, 0];

  const numCombinations1 = [0, 0, 0];
  const numCombinations2 = [0, 0, 0];

  combinations.forEach((combination) => {
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

  const evaluation1 = getEvaluation(numCombinations1);
  const evaluation2 = getEvaluation(numCombinations2);

  return [evaluation1, evaluation2];
};

const getEvaluation = (numCombinations: number[]): number => {
  let evaluation = 0;

  numCombinations.forEach((num: number, index: number) => {
    const combinationWeight: number[] = combinationWeights[index];

    if (combinationWeight.length === 1) {
      evaluation += combinationWeight[0] * num;
    } else {
      if (num > 0) evaluation += combinationWeight[0];
      if (num > 1) evaluation += combinationWeight[1] * (num - 1);
    }
  });

  return evaluation;
};

export default getEvaluations;
