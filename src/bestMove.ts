import { GameState, getGameState } from "./gameState";
import { TicTacToeStatus, getTicTacToeStatus, isGameOver } from "./ticTacToeStatus";
import minimax from "./minimax";

type Move = {
  big: number;
  small: number;
};

const getBestMove = (position: string, numMilliseconds: number): [Move, number] => {
  if (!isValid(position)) throw new Error("invalid position");

  const gameState: GameState = getGameState(position);
  if (isGameOver(gameState)) throw new Error(getResult(gameState));

  return minimax(gameState, numMilliseconds);
};

const isValid = (position: string): boolean => {
  const regex = /^[12] [0-9] (?:[012]{9}\/){8}[012]{9}$/;
  return regex.test(position);
};

const getResult = (gameState: GameState): string => {
  const numToString = {
    0: "still playing",
    1: "game over - player 1 won",
    2: "game over - player 2 won",
    3: "game over - cat's game",
  };

  const status: TicTacToeStatus = getTicTacToeStatus(gameState.board.big);
  return numToString[status];
};

export { Move, getBestMove };
