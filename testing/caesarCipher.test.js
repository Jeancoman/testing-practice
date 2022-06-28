import { caesarChipher } from "./caesarCipher";

test("Caesar Chipher at 25", () => {
  expect(caesarChipher("String to be caeserd", 25)).toBe(
    "Rsqhmf sn ad bzdrdqc"
  );
});

test("Caesar Chipher at 24", () => {
  expect(caesarChipher("String to be caeserd", 24)).toBe(
    "Qrpgle rm zc aycqcpb"
  );
});

test("Caesar Chipher at 23", () => {
    expect(caesarChipher("String to be caeserd", 23)).toBe(
      "Pqofkd ql yb zxbpboa"
    );
  });

  test("Caesar Chipher at 22", () => {
    expect(caesarChipher("String to be caeserd", 22)).toBe(
      "Opnejc pk xa ywaoanz"
    );
  });

  test("Caesar Chipher at 2", () => {
    expect(caesarChipher("String to be caeserd", 2)).toBe(
      "Uvtkpi vq dg ecgugtf"
    );
  });


  test("Caesar Chipher at 0", () => {
    expect(caesarChipher("String to be caeserd", 0)).toBe(
      "String to be caeserd"
    );
  });


  