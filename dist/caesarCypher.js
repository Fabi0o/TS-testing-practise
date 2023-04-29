"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const caesarCypher = (str) => str
    .split("")
    .map((letter) => cypherLetter(letter))
    .join("");
const cypherLetter = (letter) => {
    if (letter == "z")
        return "a";
    if (letter == "Z")
        return "A";
    if (!letter.match(/[a-z]/i))
        return letter;
    return String.fromCharCode(letter.charCodeAt(0) + 1);
};
exports.default = caesarCypher;
//# sourceMappingURL=caesarCypher.js.map