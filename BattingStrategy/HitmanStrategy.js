const { getRandomInt } = require("../util");
const BattingStrategy = require("./BattingStrategy");

const RUNS_OF_HITMAN = [0, 4, 6];
const getRunForHitsman = () => RUNS_OF_HITMAN[getRandomInt(3)];

class HitmanStrategy extends BattingStrategy {
  gerRun() {
    return getRunForHitsman();
  }
}

module.exports = HitmanStrategy;
