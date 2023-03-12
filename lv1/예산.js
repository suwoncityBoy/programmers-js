function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((acc, nextVal) => acc + nextVal, 0) > budget) {
    d.pop();
  }
  return d.length;
}
