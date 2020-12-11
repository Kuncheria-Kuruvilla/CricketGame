const { getRandomInt } = require("../util");
const BattingStrategy = require("./BattingStrategy");

class NormalStrategy extends BattingStrategy {
  gerRun() {
    return getRandomInt(7);
  }
}

module.exports = NormalStrategy;
