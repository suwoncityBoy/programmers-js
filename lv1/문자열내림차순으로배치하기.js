function solution(s) {
  return s
    .split("")
    .map((el) => el.charCodeAt())
    .sort((a, b) => b - a)
    .map((el) => String.fromCharCode(el))
    .join("");
}

// 다른 문제 풀이
function solution(s) {
  return s.split("").sort().reverse().join("");
}
