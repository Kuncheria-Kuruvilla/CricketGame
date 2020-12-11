function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Batsman {
  constructor() {
    this.runs = [];
  }
  sumofRuns() {
    return this.runs.reduce((acc, run) => acc + run);
  }
  play() {
    const run = getRandomInt(7);
    this.runs.push(run);
  }
}

module.exports = Batsman;
