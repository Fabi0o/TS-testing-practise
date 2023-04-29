import caesarCypher from "../caesarCypher";

describe("Function that implements caesar cypher", () => {
  it("should reverse a string", () => {
    expect(caesarCypher("abcdefg")).toBe("bcdefgh");
  });

  it("should reverse a string with capital letters without changing them to lower case", () => {
    expect(caesarCypher("ABCDefg")).toBe("BCDEfgh");
  });

  it("should work with string with letter Z", () => {
    expect(caesarCypher("Zebra")).toBe("Afcsb");
  });

  it("should work with mulitple words", () => {
    expect(caesarCypher("Hello World")).toBe("Ifmmp Xpsme");
  });

  it("should work with punctuations", () => {
    expect(caesarCypher("Hello, World!")).toBe("Ifmmp, Xpsme!");
    expect(
      caesarCypher(
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod in sint, similique mollitia vero eveniet? Assumenda quam modi nam alias."
      )
    ).toBe(
      "Mpsfn jqtvn epmps tju bnfu dpotfdufuvs, bejqjtjdjoh fmju. Rvpe jo tjou, tjnjmjrvf npmmjujb wfsp fwfojfu? Bttvnfoeb rvbn npej obn bmjbt."
    );
  });
});
