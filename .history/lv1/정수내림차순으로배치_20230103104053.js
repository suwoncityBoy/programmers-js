function solution(n) {
  let string = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return parseInt(string);
}
