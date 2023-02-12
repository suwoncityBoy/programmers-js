function solution(s) {
  let array = s.split(" ");
  let maxValue = Math.max(...array);
  let minValue = Math.min(...array);

  return minValue + " " + maxValue;
}
