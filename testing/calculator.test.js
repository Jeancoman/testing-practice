import { calculator } from "./calculator";

test("1 + 3 to be 4", () => {
    expect(calculator.add(1, 3)).toBe(4);
  });

  test("1 - 4 to be 3", () => {
    expect(calculator.subtract(1, 4)).toBe(-3);
  });

  test("4 / 2 to be 0", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test("4 * 2 to be 8", () => {
    expect(calculator.multiply(4, 2)).toBe(8);
  });
