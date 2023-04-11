const morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

function solution(letter) {
  return letter
    .split(" ")
    .map((el) => morse[el])
    .join("");
}

// 다른풀이
function solution(letter) {
  let str = "";
  let arr = letter.split(" ");

  for (let i = 0; i < arr.length; i++) {
    str += morse[arr[i]];
  }
  return str;
}
