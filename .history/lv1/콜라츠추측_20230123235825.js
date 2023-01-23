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

// 다시 푼 풀이

function solution(num) {
  let count = 0;
  // while 무한반복인데 몇번해야될지모를떄 근데 멈추는 건 언제인지알때
  // for 몇번까지 해야하는지 알때
  // while => 재귀도 쓸 수있음.
  const collatz = (n) => {
    if (n === 1) return count;
    count++;
    return collatz(n % 2 ? n * 3 + 1 : n / 2);
  };
  return collatz(num) > 500 ? -1 : count;
}
