import { GameState } from "./gameState";
import getWeights from "./weights";
import getEvaluation from "./evaluation";
import { TicTacToeStatus, getTicTacToeStatus } from "./ticTacToeStatus";

type ticTacToeSpot = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
const ticTacToeSpots: ticTacToeSpot[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const getStaticEvaluation = (gameState: GameState): number => {
  const status: TicTacToeStatus = getTicTacToeStatus(gameState.board.big);
  if (status === 1) return Number.POSITIVE_INFINITY;
  if (status === 2) return Number.NEGATIVE_INFINITY;
  if (status === 3) return 0;

  let staticEvaluation = 0;

  ticTacToeSpots.forEach((index) => {
    const [weight1, weight2]: number[] = getWeights(gameState.board.big, index);
    const [evaluation1, evaluation2]: number[] = getEvaluation(gameState.board.small[index], weight1 === 0);

    staticEvaluation += weight1 * evaluation1;
    staticEvaluation -= weight2 * evaluation2;
  });

  return staticEvaluation;
};

export { ticTacToeSpot, getStaticEvaluation };
