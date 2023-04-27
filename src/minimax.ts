import { Move } from "./bestMove";
import { GameState } from "./gameState";
import { isGameOver } from "./ticTacToeStatus";
import getStaticEvaluation from "./staticEvaluation";
import { Child, getChildren } from "./children";

const minimax = (
  move: Move,
  gameState: GameState,
  depth: number,
  alpha: number,
  beta: number,
  maximizingPlayer: boolean,
  isFirst: boolean
): [Move, number] => {
  if (depth === 0 || isGameOver(gameState)) return [move, getStaticEvaluation(gameState) ];

  if (maximizingPlayer) {
    let maxEvaluation: number = Number.NEGATIVE_INFINITY;

    const children: Child[] = getChildren(gameState);
    for (const child of children) {
      if (move === null) move = child.move;

      const [, evaluation] = minimax(move, child.gameState, depth - 1, alpha, beta, false, false);

      if (evaluation > maxEvaluation) {
        if (isFirst) move = child.move;
        maxEvaluation = evaluation;
      }

      alpha = Math.max(alpha, evaluation);
      if (beta <= alpha) break;
    }

    return [move, maxEvaluation];
  } else {
    let minEvaluation: number = Number.POSITIVE_INFINITY;

    const children: Child[] = getChildren(gameState);
    for (const child of children) {
      if (move === null) move = child.move;

      const [, evaluation] = minimax(move, child.gameState, depth - 1, alpha, beta, true, false);

      if (evaluation < minEvaluation) {
        if (isFirst) move = child.move;
        minEvaluation = evaluation;
      }

      beta = Math.min(beta, evaluation);
      if (alpha >= beta) break;
    }

    return [move, minEvaluation];
  }
};

export default minimax;
