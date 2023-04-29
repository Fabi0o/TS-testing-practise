import calculator from "../calculator";

describe("All calculator functionalities", () => {
  it("should sum two numbers", () => {
    expect(calculator.add(1, 2)).toEqual(3);
    expect(calculator.add(10, 35)).toEqual(45);
    expect(calculator.add(997, 112)).toEqual(1109);
  });

  it("should subtract two numbers", () => {
    expect(calculator.subtract(2, 1)).toEqual(1);
    expect(calculator.subtract(33, 10)).toEqual(23);
    expect(calculator.subtract(5, 15)).toEqual(-10);
  });

  it("should divide two numbers", () => {
    expect(calculator.divide(2, 1)).toEqual(2);
    expect(calculator.divide(22, 11)).toEqual(2);
    expect(calculator.divide(5, 2)).toEqual(2.5);
  });

  it("should multiply two numbers", () => {
    expect(calculator.multiply(1, 2)).toEqual(2);
    expect(calculator.multiply(33, 2)).toEqual(66);
    expect(calculator.multiply(1, 0)).toEqual(0);
  });

  it("shouldn't allow to divide by 0", () => {
    expect(() => calculator.divide(1, 0)).toThrowError(
      "You can't divide by 0!"
    );
  });
});
