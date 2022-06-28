import { capitalize } from "./capitalize";

test("String must be capitalized", () => {
  expect(capitalize("string to be capitalized")).toBe("String to be capitalized");
});

