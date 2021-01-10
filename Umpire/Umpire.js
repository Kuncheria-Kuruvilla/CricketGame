const BATTING_TYPE = require("./BattingStrategy/BatsManTypes");
const BOWLING_TYPE = require("./Umpire/BowlerType");

const isOutDecider = {
  [BOWLING_TYPE.NORMAL]: {
    [BATTING_TYPE.NORMAL_BATSMAN]: (batsmanRun, bowlerScore) =>
      batsmanRun == bowlerScore,
    [BATTING_TYPE.HITMAN]: (batsmanRun, bowlerScore) =>
      batsmanRun == bowlerScore,
    [BATTING_TYPE.DEFENSIVE]: (batsmanRun, bowlerScore) =>
      batsmanRun == bowlerScore,
    [BATTING_TYPE.FINISHER]: (batsmanRun, bowlerScore) =>
      batsmanRun % 2 === bowlerScore % 2,
  },
  [BOWLING_TYPE.PART_TIME]: {
    [BATTING_TYPE.NORMAL_BATSMAN]: (batsmanRun, bowlerScore) => flse,
    [BATTING_TYPE.HITMAN]: (batsmanRun, bowlerScore) => flse,
    [BATTING_TYPE.DEFENSIVE]: (batsmanRun, bowlerScore) => flse,
    [BATTING_TYPE.FINISHER]: (batsmanRun, bowlerScore) => flse,
  },
};

const addScoreDecider = {
  [BOWLING_TYPE.NORMAL]: {
    [BATTING_TYPE.NORMAL_BATSMAN]: (batsmanRun, bowlerScore) =>
      getisOutDecide(BOWLING_TYPE.NORMAL, BATTING_TYPE.NORMAL_BATSMAN)(
        batsmanRun,
        bowlerScore
      ),
    [BATTING_TYPE.HITMAN]: (batsmanRun, bowlerScore) =>
      batsmanRun == bowlerScore,
    [BATTING_TYPE.DEFENSIVE]: (batsmanRun, bowlerScore) =>
      batsmanRun == bowlerScore,
    [BATTING_TYPE.FINISHER]: (batsmanRun, bowlerScore) =>
      batsmanRun % 2 === bowlerScore % 2,
  },
  [BOWLING_TYPE.PART_TIME]: {
    [BATTING_TYPE.NORMAL_BATSMAN]: (batsmanRun, bowlerScore) => flse,
    [BATTING_TYPE.HITMAN]: (batsmanRun, bowlerScore) => flse,
    [BATTING_TYPE.DEFENSIVE]: (batsmanRun, bowlerScore) => flse,
    [BATTING_TYPE.FINISHER]: (batsmanRun, bowlerScore) => flse,
  },
};

const getisOutDecide = (bowlingType, battingType) => {
  return isOutDecider(bowlingType, battingType);
};
class Umpire {
  constructor() {}

  isOut(batsmanRun, bowlerScore, bowlingType, battingType) {
    return getisOutDecide(bowlingType, battingType)(batsmanRun, bowlerScore);
  }

  addScore(batsmanRun, bowlerScore, bowlingType, battingType) {}
}

module.exports = Umpire;
