const sum = require("../../17.5/sum");

test("Сумма 1 и 2 равна 3.", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Сумма 1 и 0 равна 1.", () => {
  expect(sum(1, 0)).toBe(1);
});
