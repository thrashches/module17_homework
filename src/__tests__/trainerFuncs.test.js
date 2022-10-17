import { getPercents } from "../trainerFuncs";

describe("Тестирование функции процента от числа.", () => {
  it("30 процентов от 200 это 60", () => {
    expect(getPercents(30, 200)).toBe(60);
  });
});
