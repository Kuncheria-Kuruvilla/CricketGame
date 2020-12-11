const createBatsman = require("./BatsMan");
const Bowler = require("./Bowler");
const { NORMAL_BATSMAN, HITMAN } = require("./BatsMan/BatsManTypes");

// const TARGET = 20;
// const MAX_BALLS_IN_OVER = 6;
// const OVERS = 2;
const BATSMAN_TYPE = HITMAN;
const batsman = createBatsman(BATSMAN_TYPE);
const bowler = new Bowler();

runs = [];
bowlerScores = [];
const sumofRuns = (runs) => runs.reduce((acc, run) => acc + run, 0);

const didBatsmanWin = (runs, target) => runs >= target;

class Game {
  constructor(target, maxBallsinAnOver, overs) {
    this.target = target;
    this.maxBallsinAnOver = maxBallsinAnOver;
    this.overs = overs;
  }
  startGame() {
    for (let i = 0; i < this.maxBallsinAnOver * this.overs; i++) {
      const run = batsman.bat();
      const bowlerScore = bowler.bowl();
      if (!(run === bowlerScore)) {
        runs.push(run);
        bowlerScores.push(bowlerScore);
        if (didBatsmanWin(sumofRuns(runs), this.target)) {
          break;
        }
      } else {
        console.log(
          `Bats man is out : batsman - ${run} bowler - ${bowlerScore}`
        );
        break;
      }
    }
  }

  displayGameResult() {
    console.log(runs);
    console.log(bowlerScores);
    if (didBatsmanWin(sumofRuns(runs), this.target)) {
      console.log("Batsman has won");
    } else {
      console.log("Batsman has lost");
    }
  }
}

module.exports = Game;
