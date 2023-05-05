"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBestMove = void 0;
const gameState_1 = require("./gameState");
const ticTacToeStatus_1 = require("./ticTacToeStatus");
const minimax_1 = require("./minimax");
const getBestMove = (position, numMilliseconds) => {
    if (!isValid(position))
        throw new Error("invalid position");
    const gameState = (0, gameState_1.getGameState)(position);
    if ((0, ticTacToeStatus_1.isGameOver)(gameState))
        throw new Error(getResult(gameState));
    return (0, minimax_1.default)(gameState, numMilliseconds);
};
exports.getBestMove = getBestMove;
const isValid = (position) => {
    const regex = /^[12] [0-9] (?:[012]{9}\/){8}[012]{9}$/;
    return regex.test(position);
};
const getResult = (gameState) => {
    const numToString = {
        0: "still playing",
        1: "game over - player 1 won",
        2: "game over - player 2 won",
        3: "game over - cat's game",
    };
    const status = (0, ticTacToeStatus_1.getTicTacToeStatus)(gameState.board.big);
    return numToString[status];
};
