import { getPercents } from "../../17.6/trainerFuncs";

describe("Тестирование функции процента от числа.", () => {
  it("30 процентов от 200 это 60", () => {
    expect(getPercents(30, 200)).toBe(60);
  });
  it("100 процентов от 100 это 100", () => {
    expect(getPercents(100, 100)).toBe(100);
  });
  it("150 процентов от 0 это 0", () => {
    expect(getPercents(150, 0)).toBe(0);
  });
});
