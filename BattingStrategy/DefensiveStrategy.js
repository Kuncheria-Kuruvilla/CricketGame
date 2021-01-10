const { getRandomInt } = require("../util");
const BattingStrategy = require("./BattingStrategy");

const RUNS_OF_DEFENSIVE_BATSMAN = [0, 1, 2, 3];
const getRunForDefensiveBatsman = () =>
  RUNS_OF_DEFENSIVE_BATSMAN[getRandomInt(4)];

class DefensiveStrategy extends BattingStrategy {
  getRun() {
    return getRunForDefensiveBatsman();
  }
}

module.exports = DefensiveStrategy;
