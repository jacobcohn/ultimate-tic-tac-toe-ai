# Ultimate Tic Tac Toe AI

Ultimate Tic Tac Toe AI is a TypeScript/Node.js package that calculates strong moves for any Ultimate Tic Tac Toe position.

## Why I Created This Project

I created this project as part of my fourth-quarter project for my dual-credit Data Structures and Algorithms class. My teacher, Mr. Tiveron, let us choose any project that inspired us.

I was interested in a Sebastian Lague YouTube video about creating a chess AI, and I have always enjoyed playing Ultimate Tic Tac Toe with my dad. I decided to combine those interests by building an AI for one of my favorite games.

## How It Works

This project uses the minimax algorithm with alpha-beta pruning to search for the best move.

The AI evaluates positions using a heuristic function. The heuristic looks at important features for both X and O, including possible winning combinations on the large board and possible winning combinations inside each small board. It also considers how close each player is to completing those combinations. These features are assigned weights so that stronger threats and near-completed lines are valued more heavily.

Because deeper searches usually produce better moves, the algorithm uses iterative deepening. It searches depth 1 first, then depth 2, and continues increasing the depth until the given time limit is reached. When time runs out, it returns the best move found from the deepest completed search. This lets the caller control roughly how long the AI thinks before returning a move.

## Play Against It

I previously built an Ultimate Tic Tac Toe app in React for two players on the same device. I updated that project so you can play against this AI. The GUI was not the main focus of this project, so there may still be some bugs. Currently, you can only play as X, and the AI is set to think for 500 milliseconds per move.

[Play Ultimate Tic Tac Toe AI](https://jacobcohn.github.io/ultimate-tic-tac-toe-ai-implementation/)

## Installation

Install the package using npm:

```bash
npm install @jacobcohn/ultimate-tic-tac-toe-ai
```

## Usage

```javascript
import { getBestMove } from "@jacobcohn/ultimate-tic-tac-toe-ai";

const position = "1 9 000000000/000000000/000000000/000000000/000000000/000000000/000000000/000000000/000000000";
const numMilliseconds = 500;

// Returns the best move, its evaluation, and the depth searched.
const [{ big, small }, evaluation, depth] = getBestMove(position, numMilliseconds);
```

The position string has three parts:

1. **Current player**: `1` for X, `2` for O.
2. **Current big board**: `0` through `8` indicate the required small board. `9` means the player can move in any open board.
3. **Board state**: nine small boards separated by slashes. Inside each small board, `0` is empty, `1` is X, and `2` is O.

Board indexes go from left to right, then top to bottom:

```text
0 1 2
3 4 5
6 7 8
```

The returned move contains:

- `big`: the small board to play in
- `small`: the square to play inside that small board
- `evaluation`: the AI's evaluation of the move
- `depth`: the search depth reached

I recommend using `500` milliseconds as the search time. It is quick while still being strong enough to beat most human players.

## Contributing

Anyone is welcome to look through the code and see how it works. If you would like to contribute, please send me an email explaining what you would like to add. My email is available on my GitHub profile.

## License

[MIT](https://choosealicense.com/licenses/mit/)

