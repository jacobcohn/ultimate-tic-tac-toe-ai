"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bestMove_1 = require("./bestMove");
const position = "1 9 000000000/000000000/000000000/000000000/000000000/000000000/000000000/000000000/000000000";
const depth = 5;
console.log((0, bestMove_1.getBestMove)(position, depth));
