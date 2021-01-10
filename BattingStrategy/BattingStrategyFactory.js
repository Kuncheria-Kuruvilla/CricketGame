const NormalBattingStrategy = require("./NormalStrategy");
const HitmanStrategy = require("./HitmanStrategy");
const DefensiveStrategy = require("./DefensiveStrategy");

const BATTING_TYPE = require("./BatsManTypes");

function createBattringStrategy(type) {
  switch (type) {
    case BATTING_TYPE.NORMAL_BATSMAN:
      return new NormalBattingStrategy();
    case BATTING_TYPE.HITMAN:
      return new HitmanStrategy();
    case BATTING_TYPE.DEFENSIVE:
      return new DefensiveStrategy();
  }
}

module.exports = createBattringStrategy;
