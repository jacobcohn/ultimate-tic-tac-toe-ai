import { GameState, getGameState } from "./gameState";
import { TicTacToeStatus, getTicTacToeStatus } from "./ticTacToeStatus";
import minimax from "./minimax";

type Move = {
  big: number;
  small: number;
};

const getBestMove = (position: string, depth: number): [Move, number] => {
  if (!isValid(position)) throw new Error("invalid position");

  const gameState: GameState = getGameState(position);
  if (isGameOver(gameState)) throw new Error(getResult(gameState));

  const maximizingPlayer: boolean = gameState.playerTurn === 1;
  const [move, evaluation] = minimax(
    null,
    gameState,
    depth,
    Number.NEGATIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    maximizingPlayer,
    true
  );

  return [move, evaluation];
};

const isValid = (position: string): boolean => {
  const regex = /^[12] [0-9] (?:[012]{9}\/){8}[012]{9}$/;
  return regex.test(position);
};

const isGameOver = (gameState: GameState): boolean => {
  return getTicTacToeStatus(gameState.board.big) !== 0;
};

const getResult = (gameState: GameState): string => {
  const numToString = {
    0: "still playing",
    1: "player 1 won",
    2: "player 2 won",
    3: "cat's game",
  };

  const status: TicTacToeStatus = getTicTacToeStatus(gameState.board.big);
  return "game over - " + numToString[status];
};

export { Move, getBestMove };
