"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBestMove = void 0;
const gameState_1 = require("./gameState");
const ticTacToeStatus_1 = require("./ticTacToeStatus");
const minimax_1 = require("./minimax");
const getBestMove = (position, depth) => {
    if (!isValid(position))
        throw new Error("invalid position");
    const gameState = (0, gameState_1.getGameState)(position);
    if (isGameOver(gameState))
        throw new Error(getResult(gameState));
    const maximizingPlayer = gameState.playerTurn === 1;
    const [move, evaluation] = (0, minimax_1.default)(null, gameState, depth, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, maximizingPlayer, true);
    return [move, evaluation];
};
exports.getBestMove = getBestMove;
const isValid = (position) => {
    const regex = /^[12] [0-9] (?:[012]{9}\/){8}[012]{9}$/;
    return regex.test(position);
};
const isGameOver = (gameState) => {
    return (0, ticTacToeStatus_1.getTicTacToeStatus)(gameState.board.big) !== 0;
};
const getResult = (gameState) => {
    const numToString = {
        0: "still playing",
        1: "player 1 won",
        2: "player 2 won",
        3: "cat's game",
    };
    const status = (0, ticTacToeStatus_1.getTicTacToeStatus)(gameState.board.big);
    return "game over - " + numToString[status];
};
