function solution(x, n) {
  let arr = [];
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    arr.push(i * x);
  }
  return arr;
}
