# Ultimate Tic Tac Toe AI

Ultimate Tic Tac Toe AI is a NodeJS Module written in TypeScript that gives the best move for any ultimate tic tac toe position.

## Why did I create this project?

I am currently a senior in high school and enrolled in a dual credit Data Structures and Algorithms class. My teacher, Mr. Tiveron, assigned a fourth quarter project where we could create any project that inspired us. I was very intrigued by a YouTube video by Sebastian Lague on creating a Chess AI. And, I have always enjoyed playing Ultimate Tic Tac Toe with my dad. So, I put my abilities towards creating an AI for my old favorite game, Ultimate Tic Tac Toe.

## How did I create this project?

I created this project in TypeScript using the minimax algorithm with alpha beta pruning. 

I created my heuristic function by giving defining features and assigning them weights. Each small board has features for both X and O which counts how many possible combinations there are in the big board and how close they are to being complete combinations. Additionally, they have feautures for how many possible combinations there are inside each small board and how close they are to completion for both X and O. The weights are arbitrary numbers that give more value to how close the combinations are to completion. 

All of the positions need to be searched at a certain depth for the best move to be valid. And, the bigger the depth, the better the move would be. But, there is no way to know how long a certain depth will take. My solution to this problem was to find the best move at depth 1, and then depth 2, and so on. Once a certain time has passed, then the algorithm would return the best move for the depth it was currently searching through. This allows programmers to have the algorithm return a best move in a relatively defined amount of time.

## Where can you play against it?

About a year ago, I created a an Ultimate Tic Tac Toe app with React for two people to play against each other on the same device. I revamped this code so that you can play my AI. I did not want to spend a lot of time implementing a new GUI, so do not be surprised if you come across a bug. You can only play as X as I did not want to spend a lot of time on the GUI. Sadly, you will lose unless you are using your own bot against it. It is set to 500 milliseconds.

[Ultimate Tic Tac Toe AI Implementation](https://jacobcohn.github.io/ultimate-tic-tac-toe-ai-implementation/)

## Installation

Use a package manager of your choice to install this package. For example, you can use npm.

```bash
npm install ultimate-tic-tac-toe
```

## Usage

The position string contains 3 components. The first number is the current player. 1 corresponds to X and 2 corresponds to O. The second number is the current big board that the player can play in. 0-8 are the all the spots on the tic tac toe board from left to right, then up to down. 9 corresponds to any open board. Finally, the long sequence of digits and slashes is the board. 0 corresponds to an empty spot. 1 corresponds to X and 2 corresponds to O. Each slash is to separate each small board from each other.

Then, you give the algorithm a number of milliseconds to search for. I recommend 500 milliseconds as it is quick, yet is able to search deep enough to defeat pretty much any human.

```javascript
import { getBestMove } from "ulimate-tic-tac-toe-ai";

const position = "1 9 000000000/000000000/000000000/000000000/000000000/000000000/000000000/000000000/000000000";
const numMilliseconds = 500;

// returns the best move (big and small) with its evaluation and depth
const [ { big, small }, evaluation, depth ] = getBestMove(position, numMilliseconds);
```

## Contributing

Anyone can look through the code and see how it was written. If you do want to add to it, I only request that you send me an email on what you are adding as I am interested. My personal email is in my GitHub Profile.

## License

[MIT](https://choosealicense.com/licenses/mit/)
