function solution(cipher, code) {
  let str = "";
  for (let i = 1; i * code <= cipher.length; i++) {
    str += cipher[i * code - 1];
  }

  return str;
}
