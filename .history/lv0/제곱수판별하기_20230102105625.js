function solution(n) {
  let res = Math.sqrt(n); // 제곱수를 반환 해주는 메서드
  if (Number.isInteger(res)) {
    // 정수인지 실수인지 boolean으로 표시해주는 메서드
    return 1;
  } else {
    return 2;
  }
}

// 코드 축약

function solution(n) {
  let res = Math.sqrt(n); // 제곱수를 반환 해주는 메서드
  return Number.isInteger(res) ? 1 : 2; // 정수인지 실수인지 boolean으로 표시해주는 메서드
}
