const Umpire = require("./Umpire");

class UmpireForNormalBowler extends Umpire {
  isOut(batsmanRun, bowlerScore) {
    return batsmanRun === bowlerScore;
  }

  addScore(batsmanRun, bowlerScore) {
    return !isOut(batsmanRun, bowlerScore);
  }
}

module.exports = UmpireForNormalBowler;
