const analyzeArray = (arr: Array<number>) => {
  return {
    avarage: arr.reduce((a, b) => a + b) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

export default analyzeArray;
