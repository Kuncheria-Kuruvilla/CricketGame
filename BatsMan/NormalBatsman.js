const { getRandomInt } = require("../util");
const Batsman = require("./Batsman");

class NormalBatsman extends Batsman {
  bat() {
    return getRandomInt(7);
  }
}

module.exports = NormalBatsman;
