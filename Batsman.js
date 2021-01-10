class Batsman {
  constructor(strategy) {
    this.strategy = strategy;
  }
  bat() {
    return this.strategy.getRun();
  }
}

module.exports = Batsman;
