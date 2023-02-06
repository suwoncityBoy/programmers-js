function solution(n, m) {
  let solution = [];
  const max = (a, b) => {
    if (b == 0) {
      return a;
    }
    return max(b, a % b);
  };
  const min = (a, b) => (a * b) / max(a, b);
  return [max(n, m), min(n, m)];
}
