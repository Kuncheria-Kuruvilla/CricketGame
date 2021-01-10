const Game = require("./Game");

const TARGET = 20;
const MAX_BALLS_IN_OVER = 6;
const OVERS = 2;

const game = new Game(TARGET, MAX_BALLS_IN_OVER, OVERS);

game.startGame();

game.displayGameResult();
