import analyzeArray from "../analyzeArray";

describe("Analyze functionalities", () => {
  it("should calculate avarage value of array items", () => {
    expect(analyzeArray([1, 1, 1, 1, 1, 1, 1, 1, 1]).avarage).toEqual(1);
    expect(analyzeArray([4, 4, 5, 1, 6, 2, 6]).avarage).toEqual(4);
    expect(analyzeArray([121, 234, 999, 856, 766]).avarage).toEqual(595.2);
  });

  it("should return smalles number in array", () => {
    expect(analyzeArray([1, 1, 1, 1, 1, 1, 1, 1, 1]).min).toEqual(1);
    expect(analyzeArray([4, 4, 5, 1, 6, 2, 6]).min).toEqual(1);
    expect(analyzeArray([121, 234, 999, 856, 766]).min).toEqual(121);
  });

  it("should return biggest number in array", () => {
    expect(analyzeArray([1, 1, 1, 1, 1, 1, 1, 1, 1]).max).toEqual(1);
    expect(analyzeArray([4, 4, 5, 1, 6, 2, 6]).max).toEqual(6);
    expect(analyzeArray([121, 234, 999, 856, 766]).max).toEqual(999);
  });

  it("should return length of passed array", () => {
    expect(analyzeArray([1, 1, 1, 1, 1, 1, 1, 1, 1]).length).toEqual(9);
    expect(analyzeArray([4, 4, 5, 1, 6, 2, 6]).length).toEqual(7);
    expect(analyzeArray([121, 234, 999, 856, 766]).length).toEqual(5);
  });
});
