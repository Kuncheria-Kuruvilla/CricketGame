const { getRandomInt } = require("../util");
const BattingStrategy = require("./BattingStrategy");

class NormalStrategy extends BattingStrategy {
  getRun() {
    return getRandomInt(7);
  }
}

module.exports = NormalStrategy;
