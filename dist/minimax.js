"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ticTacToeStatus_1 = require("./ticTacToeStatus");
const staticEvaluation_1 = require("./staticEvaluation");
const children_1 = require("./children");
const minimax = (gameState, numMilliseconds) => {
    let depth = 0;
    let move, evaluation = null;
    const startTime = Date.now();
    while (!isPassedTime(startTime, numMilliseconds)) {
        if (evaluation === Number.NEGATIVE_INFINITY || evaluation === Number.POSITIVE_INFINITY)
            break;
        depth += 1;
        [move, evaluation] = minimaxHelper(null, gameState, depth, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, gameState.playerTurn === 1, true);
    }
    ;
    return [move, evaluation];
};
const isPassedTime = (startTime, numMilliseconds) => {
    return numMilliseconds < Date.now() - startTime;
};
const minimaxHelper = (firstMove, gameState, depth, alpha, beta, maximizingPlayer, isFirst) => {
    if (depth === 0 || (0, ticTacToeStatus_1.isGameOver)(gameState))
        return [firstMove, (0, staticEvaluation_1.getStaticEvaluation)(gameState)];
    if (maximizingPlayer) {
        let maxEvaluation = Number.NEGATIVE_INFINITY;
        const children = (0, children_1.getChildren)(gameState);
        for (const child of children) {
            if (firstMove === null)
                firstMove = child.move;
            const [, evaluation] = minimaxHelper(firstMove, child.gameState, depth - 1, alpha, beta, false, false);
            if (evaluation > maxEvaluation) {
                maxEvaluation = evaluation;
                if (isFirst)
                    firstMove = child.move;
            }
            alpha = Math.max(alpha, evaluation);
            if (beta <= alpha)
                break;
        }
        return [firstMove, maxEvaluation];
    }
    else {
        let minEvaluation = Number.POSITIVE_INFINITY;
        const children = (0, children_1.getChildren)(gameState);
        for (const child of children) {
            if (firstMove === null)
                firstMove = child.move;
            const [, evaluation] = minimaxHelper(firstMove, child.gameState, depth - 1, alpha, beta, true, false);
            if (evaluation < minEvaluation) {
                minEvaluation = evaluation;
                if (isFirst)
                    firstMove = child.move;
            }
            beta = Math.min(beta, evaluation);
            if (alpha >= beta)
                break;
        }
        return [firstMove, minEvaluation];
    }
};
exports.default = minimax;
