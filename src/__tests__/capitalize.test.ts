import capitalize from "../capitalize";

describe("Capitalize functin", () => {
  it("should return same string when first letter is upeer case", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("should return string with capitalize letter when all letters are lower case", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should return an empty string when empty string is passed", () => {
    expect(capitalize("")).toBe("");
  });
});
