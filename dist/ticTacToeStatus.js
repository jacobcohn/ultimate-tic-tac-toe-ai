"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isGameOver = exports.getTicTacToeStatus = void 0;
const getTicTacToeStatus = (board) => {
  // check rows
  for (let i = 0; i < 9; i += 3) {
    const rowVal = board[i];
    if ((rowVal === 1 || rowVal === 2) && board[i + 1] === rowVal && board[i + 2] === rowVal) {
      return rowVal;
    }
  }
  // check columns
  for (let i = 0; i < 3; i++) {
    const colVal = board[i];
    if ((colVal === 1 || colVal === 2) && board[i + 3] === colVal && board[i + 6] === colVal) {
      return colVal;
    }
  }
  // check diagonals
  const diagonal1Val = board[0];
  if ((diagonal1Val === 1 || diagonal1Val === 2) && board[4] === diagonal1Val && board[8] === diagonal1Val) {
    return diagonal1Val;
  }
  const diagonal2Val = board[2];
  if ((diagonal2Val === 1 || diagonal2Val === 2) && board[4] === diagonal2Val && board[6] === diagonal2Val) {
    return diagonal2Val;
  }
  // check if there are open spaces
  if (board.includes(0)) {
    return 0;
  }
  return 3;
};
exports.getTicTacToeStatus = getTicTacToeStatus;
const isGameOver = (gameState) => {
  return getTicTacToeStatus(gameState.board.big) !== 0;
};
exports.isGameOver = isGameOver;
