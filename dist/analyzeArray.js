"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const analyzeArray = (arr) => {
    return {
        avarage: arr.reduce((a, b) => a + b) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
};
exports.default = analyzeArray;
//# sourceMappingURL=analyzeArray.js.map