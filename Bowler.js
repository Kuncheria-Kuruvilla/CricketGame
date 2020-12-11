const { getRandomInt } = require("./util");
class Bowler {
  bowl() {
    return getRandomInt(7);
  }
}

module.exports = Bowler;
