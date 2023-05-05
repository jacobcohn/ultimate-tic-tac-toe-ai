"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChildren = void 0;
const ticTacToeStatus_1 = require("./ticTacToeStatus");
const getChildren = (gameState) => {
    const moves = getMoves(gameState);
    const gameStates = getGameStates(gameState, moves);
    const children = [];
    for (let i = 0; i < moves.length; i++) {
        const child = { move: moves[i], gameState: gameStates[i] };
        children.push(child);
    }
    return children;
};
exports.getChildren = getChildren;
const getMoves = (gameState) => {
    const moves = [];
    gameState.legalBoards.forEach((bigIndex) => {
        gameState.board.small[bigIndex].forEach((value, smallIndex) => {
            if (value === 0) {
                const move = { big: bigIndex, small: smallIndex };
                moves.push(move);
            }
        });
    });
    return moves;
};
const getGameStates = (gameState, moves) => {
    const gameStates = [];
    moves.forEach((move) => {
        const gameStateCopy = copyObj(gameState);
        updateGameState(gameStateCopy, move);
        gameStates.push(gameStateCopy);
    });
    return gameStates;
};
const copyObj = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
const updateGameState = (gameState, move) => {
    const { big, small } = move;
    updateBoard(gameState, big, small);
    updatePlayerTurn(gameState);
    updateLegalBoards(gameState, small);
};
const updateBoard = (gameState, big, small) => {
    updateSmallBoard(gameState, big, small);
    updateBigBoard(gameState, big);
};
const updateSmallBoard = (gameState, big, small) => {
    gameState.board.small[big][small] = gameState.playerTurn;
};
const updateBigBoard = (gameState, big) => {
    gameState.board.big[big] = (0, ticTacToeStatus_1.getTicTacToeStatus)(gameState.board.small[big]);
};
const updatePlayerTurn = (gameState) => {
    gameState.playerTurn = gameState.playerTurn === 1 ? 2 : 1;
};
const updateLegalBoards = (gameState, small) => {
    const legalBoards = [];
    if (!isBoardAtSmallIndexDecided(gameState, small)) {
        legalBoards.push(small);
    }
    else {
        gameState.board.big.forEach((value, index) => {
            if (value === 0)
                legalBoards.push(index);
        });
    }
    gameState.legalBoards = legalBoards;
};
const isBoardAtSmallIndexDecided = (gameState, small) => {
    const status = (0, ticTacToeStatus_1.getTicTacToeStatus)(gameState.board.small[small]);
    if (status === 0)
        return false;
    return true;
};
