function solution(num) {
  // 짝수면 2로 나누기 , 홀수면 3을 곱하고 1 더하기 , 이걸 1이 될때까지 반복
  let cnt = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else if (num % 2 === 1) {
      num = num * 3 + 1;
    }
    cnt += 1;
  }
  return cnt >= 500 ? -1 : cnt;
}
