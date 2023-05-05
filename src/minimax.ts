import { Move } from "./bestMove";
import { GameState } from "./gameState";
import { isGameOver } from "./ticTacToeStatus";
import { getStaticEvaluation } from "./staticEvaluation";
import { Child, getChildren } from "./children";

const minimax = (gameState: GameState, numMilliseconds: number): [ Move, number ] => {
  let depth = 0;
  let move: Move, evaluation: number = null;
  const startTime = Date.now();

  while (!isPassedTime(startTime, numMilliseconds)) {
    if (evaluation === Number.NEGATIVE_INFINITY || evaluation === Number.POSITIVE_INFINITY) break;
    
    depth += 1;
    [ move, evaluation ] = minimaxHelper(
      null,
      gameState,
      depth,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY,
      gameState.playerTurn === 1,
      true
    );
  };

  return [ move, evaluation ];
};

const isPassedTime = (startTime: number, numMilliseconds: number): boolean => {
  return numMilliseconds < Date.now() - startTime;
};

const minimaxHelper = (
    firstMove: Move,
    gameState: GameState,
    depth: number,
    alpha: number,
    beta: number,
    maximizingPlayer: boolean,
    isFirst: boolean
  ): [Move, number] => {
    if (depth === 0 || isGameOver(gameState)) return [firstMove, getStaticEvaluation(gameState)];
  
    if (maximizingPlayer) {
      let maxEvaluation: number = Number.NEGATIVE_INFINITY;
  
      const children: Child[] = getChildren(gameState);
      for (const child of children) {
        if (firstMove === null) firstMove = child.move;

        const [ , evaluation ] = minimaxHelper(firstMove, child.gameState, depth - 1, alpha, beta, false, false);
  
        if (evaluation > maxEvaluation) {
          maxEvaluation = evaluation;
          if (isFirst) firstMove = child.move;
        }
  
        alpha = Math.max(alpha, evaluation);
        if (beta <= alpha) break;
      }
  
      return [ firstMove, maxEvaluation ];
    } else {
      let minEvaluation: number = Number.POSITIVE_INFINITY;
  
      const children: Child[] = getChildren(gameState);
      for (const child of children) {
        if (firstMove === null) firstMove = child.move;

        const [ , evaluation ] = minimaxHelper(firstMove, child.gameState, depth - 1, alpha, beta, true, false);
  
        if (evaluation < minEvaluation) {
          minEvaluation = evaluation;
          if (isFirst) firstMove = child.move;
        }
  
        beta = Math.min(beta, evaluation);
        if (alpha >= beta) break;
      }
  
      return [ firstMove, minEvaluation ];
    }
  }

export default minimax;
