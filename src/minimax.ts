import { Move } from "./bestMove";
import { GameState } from "./gameState";

const minimax = (
  move: Move,
  gameState: GameState,
  depth: number,
  alpha: number,
  beta: number,
  maximizingPlayer: boolean,
  isFirst: boolean
): [Move, number] => {
  console.log(move, gameState, depth, alpha, beta, maximizingPlayer, isFirst);

  const m1 = { big: 0, small: 0 };
  const e1 = 5;

  return [m1, e1];
};

export default minimax;
