const revert = require("../revert");

test("Из строки hello получится olleh.", () => {
  expect(revert("hello")).toBe("olleh");
});

test("Из строки test получится tset.", () => {
  expect(revert("test")).toBe("tset");
});
