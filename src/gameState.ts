import { getTicTacToeStatus } from "./ticTacToeStatus";

type Board = {
  big: number[];
  small: number[][];
};

type GameState = {
  playerTurn: number;
  legalBoards: number[];
  board: Board;
};

const getGameState = (position: string): GameState => {
  const [playerTurnStr, legalBoardsStr, boardStr]: string[] = position.split(" ");

  const playerTurn: number = getPlayerTurn(playerTurnStr);
  const board: Board = getBoard(boardStr);
  const legalBoards: number[] = getLegalBoards(legalBoardsStr, board);

  return { playerTurn, legalBoards, board };
};

const getPlayerTurn = (str: string): number => {
  return parseInt(str);
};

const getBoard = (board: string): Board => {
  const small: number[][] = getSmallBoard(board);
  const big: number[] = getBigBoard(small);

  return { small, big };
};

const getSmallBoard = (smallBoard: string): number[][] => {
  return smallBoard.split("/").map((str) => str.split("").map((char) => parseInt(char)));
};

const getBigBoard = (smallBoard: number[][]): number[] => {
  return smallBoard.map((board) => getTicTacToeStatus(board));
};

const getLegalBoards = (keyStr: string, board: Board): number[] => {
  const key: number = parseInt(keyStr);
  const legalBoards: number[] = [];

  if (key != 9) {
    legalBoards.push(key);
  } else {
    board.big.forEach((num, i) => {
      if (num === 0) legalBoards.push(i);
    });
  }

  return legalBoards;
};

export { Board, GameState, getGameState };
