function solution(arr) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (avg = sum / arr.length);
}

//reduce 메서드로 다시 푼 풀이
function solution(arr) {
  return arr.reduce((acc, next) => acc + next / arr.length, 0);
}
