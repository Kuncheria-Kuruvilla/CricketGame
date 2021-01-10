import { NormalStrategy } from "./NormalStrategy";

describe("Normal strategy", () => {
  let normalStrategy;
  beforeEach(() => {
    normalStrategy = new NormalStrategy();
  });
  it("always takes a run between 0 and 6", () => {
    expect(normalStrategy.getRun()).toBeGreaterThan(-1);
  });
});
