function solution(box, n) {
  return box.map((x) => Math.floor(x / n)).reduce((a, b) => a * b);
}
