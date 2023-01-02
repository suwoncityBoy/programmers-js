// 다시 푼 풀이

// 효율이 좋지 않은 풀이 테스트2에서 실패걸림
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((prev, cur) => Number(prev) + Number(cur));
}
