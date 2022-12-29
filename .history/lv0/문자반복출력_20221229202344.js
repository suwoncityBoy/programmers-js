function solution(my_string, n) {
  return [...my_string].map((number) => number.repeat(n)).join("");
}
