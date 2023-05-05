"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameState = void 0;
const ticTacToeStatus_1 = require("./ticTacToeStatus");
const getGameState = (position) => {
    const [playerTurnStr, legalBoardsStr, boardStr] = position.split(" ");
    const playerTurn = getPlayerTurn(playerTurnStr);
    const board = getBoard(boardStr);
    const legalBoards = getLegalBoards(legalBoardsStr, board);
    return { playerTurn, legalBoards, board };
};
exports.getGameState = getGameState;
const getPlayerTurn = (str) => {
    return parseInt(str);
};
const getBoard = (board) => {
    const small = getSmallBoard(board);
    const big = getBigBoard(small);
    return { small, big };
};
const getSmallBoard = (smallBoard) => {
    return smallBoard.split("/").map((str) => str.split("").map((char) => parseInt(char)));
};
const getBigBoard = (smallBoard) => {
    return smallBoard.map((board) => (0, ticTacToeStatus_1.getTicTacToeStatus)(board));
};
const getLegalBoards = (keyStr, board) => {
    const key = parseInt(keyStr);
    const legalBoards = [];
    if (key != 9) {
        legalBoards.push(key);
    }
    else {
        board.big.forEach((num, i) => {
            if (num === 0)
                legalBoards.push(i);
        });
    }
    return legalBoards;
};
