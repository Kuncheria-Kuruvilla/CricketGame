const Umpire = require("./Umpire");

class UmpireForParttimeBowler extends Umpire {
  isOut(batsmanRun, bowlerScore) {
    return false;
  }

  addScore(batsmanRun, bowlerScore) {
    return !(batsmanRun === bowlerScore);
  }
}

module.exports = UmpireForParttimeBowler;
