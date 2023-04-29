const caesarCypher = (str: string) =>
  str
    .split("")
    .map((letter) => cypherLetter(letter))
    .join("");

const cypherLetter = (letter: string) => {
  if (letter == "z") return "a";
  if (letter == "Z") return "A";
  if (!letter.match(/[a-z]/i)) return letter;

  return String.fromCharCode(letter.charCodeAt(0) + 1);
};

export default caesarCypher;
