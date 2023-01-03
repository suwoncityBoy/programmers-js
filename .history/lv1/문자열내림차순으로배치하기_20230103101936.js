function solution(s) {
  return s
    .split("")
    .map((el) => el.charCodeAt())
    .sort((a, b) => b - a)
    .map((el) => String.fromCharCode(el))
    .join("");
}
