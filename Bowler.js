const { getRandomInt } = require("./util");
class Bowler {
  constructor(umpireStrategy) {
    this.umpireStrategy = umpireStrategy;
  }
  bowl() {
    return getRandomInt(7);
  }
}

module.exports = Bowler;
