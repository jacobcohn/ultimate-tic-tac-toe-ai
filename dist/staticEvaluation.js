"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticEvaluation = void 0;
const weights_1 = require("./weights");
const evaluation_1 = require("./evaluation");
const ticTacToeSpots = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const getStaticEvaluation = (gameState) => {
  let staticEvaluation = 0;
  ticTacToeSpots.forEach((index) => {
    const [weight1, weight2] = (0, weights_1.default)(gameState.board.big, index);
    const [evaluation1, evaluation2] = (0, evaluation_1.default)(gameState.board.small[index], index, 1, weight1 === 0);
    staticEvaluation += weight1 * evaluation1;
    staticEvaluation -= weight2 * evaluation2;
  });
  return staticEvaluation;
};
exports.getStaticEvaluation = getStaticEvaluation;
