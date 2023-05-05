"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const playerCounts_1 = require("./playerCounts");
const combinationWeights = [[1], [3], [8, 3]];
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
const getEvaluations = (board, isWeight0) => {
    if (isWeight0)
        return [0, 0];
    const numCombinations1 = [0, 0, 0];
    const numCombinations2 = [0, 0, 0];
    combinations.forEach((combination) => {
        const [player1Count, player2Count] = (0, playerCounts_1.default)(board, combination);
        if (player1Count === 2 && player2Count === 0) {
            numCombinations1[2]++;
        }
        else if (player1Count === 0 && player2Count === 2) {
            numCombinations2[2]++;
        }
        else if (player1Count === 1 && player2Count === 0) {
            numCombinations1[1]++;
        }
        else if (player1Count === 0 && player2Count === 1) {
            numCombinations2[1]++;
        }
        else if (player1Count === 0 && player2Count === 0) {
            numCombinations1[0]++;
            numCombinations2[0]++;
        }
    });
    const evaluation1 = getEvaluation(numCombinations1);
    const evaluation2 = getEvaluation(numCombinations2);
    return [evaluation1, evaluation2];
};
const getEvaluation = (numCombinations) => {
    let evaluation = 0;
    numCombinations.forEach((num, index) => {
        const combinationWeight = combinationWeights[index];
        if (combinationWeight.length === 1) {
            evaluation += combinationWeight[0] * num;
        }
        else {
            if (num > 0)
                evaluation += combinationWeight[0];
            if (num > 1)
                evaluation += combinationWeight[1] * (num - 1);
        }
    });
    return evaluation;
};
exports.default = getEvaluations;
