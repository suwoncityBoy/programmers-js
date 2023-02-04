function solution(left, right) {
  let solution = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      solution -= i;
    } else {
      solution += i;
    }
  }
  return solution;
}
