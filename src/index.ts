import { getBestMove } from "./bestMove";

const position = "1 9 000000000/000000000/000000000/000000000/000000000/000000000/000000000/000000000/000000000";
const depth = 5;

console.log(getBestMove(position, depth));
