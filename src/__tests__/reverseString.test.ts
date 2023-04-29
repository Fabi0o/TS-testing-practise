import reverseString from "../reverseString";

describe("Reverse string function", () => {
  it("should reverse a passed string", () => {
    expect(reverseString("olleH")).toBe("Hello");
    expect(reverseString("dlroW")).toBe("World");
  });

  it("should return an empty array when passed an empty array", () => {
    expect(reverseString("")).toBe("");
  });
});
