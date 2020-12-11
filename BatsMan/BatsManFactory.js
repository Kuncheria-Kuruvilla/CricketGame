const NormalBatsMan = require("./NormalBatsman");
const Hitman = require("./Hitman");
const { NORMAL_BATSMAN, HITMAN } = require("./BatsManTypes");

function createBatsman(type) {
  switch (type) {
    case NORMAL_BATSMAN:
      return new NormalBatsMan();
      break;
    case HITMAN:
      return new Hitman();
      break;
  }
}

module.exports = createBatsman;
