import { GameState } from "./gameState";
import getWeight from "./weight";
import getEvaluation from "./evaluation";

const getStaticEvaluation = (gameState: GameState): number => {
  let staticEvaluation = 0;

  for (let index = 0; index < gameState.board.big.length; index++) {
    const weight1: number = getWeight(gameState.board.big, index, 1);
    const weight2: number = getWeight(gameState.board.big, index, 2);
    const evaluation1: number = getEvaluation(gameState.board.small[index], index, 1);
    const evaluation2: number = getEvaluation(gameState.board.small[index], index, 2);

    staticEvaluation += weight1 * evaluation1;
    staticEvaluation -= weight2 * evaluation2;
  };

  return staticEvaluation;
};



export default getStaticEvaluation;
