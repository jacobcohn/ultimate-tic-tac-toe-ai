"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ticTacToeStatus_1 = require("./ticTacToeStatus");
const children_1 = require("./children");
const minimax = (move, gameState, depth, alpha, beta, maximizingPlayer, isFirst) => {
    if (depth === 0 || (0, ticTacToeStatus_1.isGameOver)(gameState))
        return [move, 0]; // getStaticEvaluation(gameState) ];
    if (maximizingPlayer) {
        let maxEvaluation = Number.NEGATIVE_INFINITY;
        const children = (0, children_1.getChildren)(gameState);
        for (const child of children) {
            if (move === null)
                move = child.move;
            const [, evaluation] = minimax(move, child.gameState, depth - 1, alpha, beta, false, false);
            if (evaluation > maxEvaluation) {
                if (isFirst)
                    move = child.move;
                maxEvaluation = evaluation;
            }
            alpha = Math.max(alpha, evaluation);
            if (beta <= alpha)
                break;
        }
        return [move, maxEvaluation];
    }
    else {
        let minEvaluation = Number.POSITIVE_INFINITY;
        const children = (0, children_1.getChildren)(gameState);
        for (const child of children) {
            if (move === null)
                move = child.move;
            const [, evaluation] = minimax(move, child.gameState, depth - 1, alpha, beta, true, false);
            if (evaluation < minEvaluation) {
                if (isFirst)
                    move = child.move;
                minEvaluation = evaluation;
            }
            beta = Math.min(beta, evaluation);
            if (alpha >= beta)
                break;
        }
        return [move, minEvaluation];
    }
};
exports.default = minimax;
