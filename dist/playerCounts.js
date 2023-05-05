"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPlayerCounts = (board, combination) => {
    let player1Count = 0;
    let player2Count = 0;
    combination.forEach((value) => {
        if (board[value] === 1)
            player1Count++;
        if (board[value] === 2)
            player2Count++;
    });
    return [player1Count, player2Count];
};
exports.default = getPlayerCounts;
