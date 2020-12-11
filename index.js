const Batsman = require("./Batsman");

const TARGET = 20;
const MAX_BALLS_IN_GAME = 6;
const batsman = new Batsman();

const didBatsmanWin = (runs) => runs > TARGET;
for (let i = 0; i < MAX_BALLS_IN_GAME; i++) {
  batsman.play();
  if (didBatsmanWin(batsman.sumofRuns())) {
    break;
  }
}

if (didBatsmanWin(batsman.sumofRuns())) {
  console.log(batsman.runs);
  console.log("Batsman has won");
} else {
  console.log(batsman.runs);
  console.log("Batsman has lost");
}
