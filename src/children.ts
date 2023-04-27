import { Move } from "./bestMove";
import { GameState } from "./gameState";
import { getTicTacToeStatus } from "./ticTacToeStatus";

type Child = {
  move: Move;
  gameState: GameState;
};

const getChildren = (gameState: GameState): Child[] => {
  const moves: Move[] = getMoves(gameState);
  const gameStates: GameState[] = getGameStates(gameState, moves);
  const children: Child[] = [];

  for (let i = 0; i < moves.length; i++) {
    const child: Child = { move: moves[i], gameState: gameStates[i] };
    children.push(child);
  }

  return children;
};

const getMoves = (gameState: GameState): Move[] => {
  const moves: Move[] = [];

  gameState.legalBoards.forEach((bigIndex: number) => {
    gameState.board.small[bigIndex].forEach((value: number, smallIndex: number) => {
      if (value === 0) {
        const move = { big: bigIndex, small: smallIndex };
        moves.push(move);
      }
    });
  });

  return moves;
};

const getGameStates = (gameState: GameState, moves: Move[]): GameState[] => {
  const gameStates: GameState[] = [];

  moves.forEach((move: Move) => {
    const gameStateCopy: GameState = copyObj(gameState);
    updateGameState(gameStateCopy, move);
    gameStates.push(gameStateCopy);
  });

  return gameStates;
};

const copyObj = (obj: object) => {
  return JSON.parse(JSON.stringify(obj));
};

const updateGameState = (gameState: GameState, move: Move): void => {
  const { big, small } = move;

  updateBoard(gameState, big, small);
  updatePlayerTurn(gameState);
  updateLegalBoards(gameState, small);
};

const updateBoard = (gameState: GameState, big: number, small: number): void => {
  updateSmallBoard(gameState, big, small);
  updateBigBoard(gameState, big);
};

const updateSmallBoard = (gameState: GameState, big: number, small: number): void => {
  gameState.board.small[big][small] = gameState.playerTurn;
};

const updateBigBoard = (gameState: GameState, big: number): void => {
  gameState.board.big[big] = getTicTacToeStatus(gameState.board.small[big]);
};

const updatePlayerTurn = (gameState: GameState): void => {
  gameState.playerTurn = gameState.playerTurn === 1 ? 2 : 1;
};

const updateLegalBoards = (gameState: GameState, small: number): void => {
  const legalBoards: number[] = [];

  if (!isBoardAtSmallIndexDecided(gameState, small)) {
    legalBoards.push(small);
  } else {
    gameState.board.big.forEach((value: number, index: number) => {
      if (value === 0) legalBoards.push(index);
    });
  }

  gameState.legalBoards = legalBoards;
};

const isBoardAtSmallIndexDecided = (gameState: GameState, small: number): boolean => {
  const status: number = getTicTacToeStatus(gameState.board.small[small]);

  if (status === 0) return false;
  return true;
};

export { Child, getChildren };
