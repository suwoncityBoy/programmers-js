function solution(n) {
  let cnt = 0;
  let answer = 0;
  for (let i = 4; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) cnt++;
    }
    if (cnt >= 3) answer++;
    cnt = 0;
  }
  return answer;
}
