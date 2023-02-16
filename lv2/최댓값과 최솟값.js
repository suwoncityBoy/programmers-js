function solution(s) {
  let array = s.split(" ");
  let maxValue = Math.max(...array);
  let minValue = Math.min(...array);

  return minValue + " " + maxValue;
}

// 다시 푼 풀이

function solution(s) {
  let array = s.split(" ");

  return `${Math.min(...array)} ${Math.max(...array)}`;
}
