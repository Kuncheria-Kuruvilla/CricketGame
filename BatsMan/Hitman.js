const { getRandomInt } = require("../util");
const Batsman = require("./Batsman");

const RUNS_OF_HITMAN = [0, 4, 6];
const getRunForHitsman = () => RUNS_OF_HITMAN[getRandomInt(3)];
class Hitman extends Batsman {
  bat() {
    return getRunForHitsman();
  }
}

module.exports = Hitman;
