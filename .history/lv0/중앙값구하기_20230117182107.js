function solution(array) {
  array = array.sort((a, b) => a - b);
  let answer = array[Math.floor(array.length / 2)];
  return answer;
}

// 2023-01-17
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}
