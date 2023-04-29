const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => {
    if (!a || !b) throw new Error("You can't divide by 0!");
    return a / b;
  },
  multiply: (a, b) => a * b,
};

export default calculator;
