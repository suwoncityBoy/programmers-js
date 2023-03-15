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

function solution(n, m) {
  // 최대공약수의 기본값 1 설정
  let gcd = 1;

  // n(3)과 m(12) 중 작은 수 까지 for문을 돌린다.
  // i를 2로 설정해 둔 이유는 1을 돌 필요가 없기 때문.
  for (let i = 2; i <= Math.min(n, m); i++) {
    // n/i, m/i 둘의 나머지가 0이면 약수 이므로
    // i를 1씩 증가시키면서 최대공약수를 찾고 gcd변수에 담는다.
    if (n % i === 0 && m % i === 0) {
      gcd = i;
    }
  }

  // 최대공약수와 최소공배수의 관계를 보면 아래와 같은 공식이 있다.
  // 공식을 적용해 최소공배수를 찾아준다.
  let lcm = gcd * (n / gcd) * (m / gcd);

  // 배열에 담아 리턴한다.
  return [gcd, lcm];
}
console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]