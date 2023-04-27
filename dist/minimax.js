"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimax = (move, gameState, depth, alpha, beta, maximizingPlayer, isFirst) => {
    console.log(move, gameState, depth, alpha, beta, maximizingPlayer, isFirst);
    const m1 = { big: 0, small: 0 };
    const e1 = 5;
    return [m1, e1];
};
exports.default = minimax;
