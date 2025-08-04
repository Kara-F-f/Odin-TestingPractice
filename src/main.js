const capitalize = (string) => {
  if (!string) {
    return null;
  } else {
    string = string.trimStart();
    const first = string[0].toUpperCase();
    return first + string.slice(1);
  }
};

const reverseString = (string) => {
  let result = string[string.length - 1];
  for (let i = 2; i <= string.length; i++) {
    result += string[string.length - i];
  }
  return result;
};

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    if (b === 0) return "Error! Division by zero.";
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(string, shiftFactor) {
  const uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (uppercase.indexOf(string[i]) >= 0) {
      let newIndex = uppercase.indexOf(string[i]) + shiftFactor;
      if (newIndex >= 26) newIndex = newIndex - 26;
      result += uppercase[newIndex];
    } else if (lowercase.indexOf(string[i]) >= 0) {
      let newIndex = lowercase.indexOf(string[i]) + shiftFactor;
      if (newIndex >= 26) newIndex = newIndex - 26;
      result += lowercase[newIndex];
    } else {
      result += string[i];
    }
  }
  return result;
}

const analyzeArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Invalid input: Please provide a non-empty array of numbers.";
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
