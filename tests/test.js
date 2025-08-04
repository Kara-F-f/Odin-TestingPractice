const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("../src/main");

test("capitalize the first letter", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("reverse the string", () => {
  expect(reverseString("world")).toBe("dlrow");
});

test("calculator add function", () => {
  expect(calculator.add(42, 90)).toBe(132);
});

test("calculator substract function", () => {
  expect(calculator.subtract(75, 90)).toBe(-15);
});

test("calculator divide function", () => {
  expect(calculator.divide(15, 5)).toBe(3);
});

test("calculator multiply function", () => {
  expect(calculator.multiply(12, 54)).toBe(648);
});

test("caesarCiher test wrapping from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCiher test case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCiher test punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
