function solution(i, j, k) {
  let cnt = 0;
  for (i; i <= j; i++) {
    cnt += [...("" + i)].filter((el) => el == k).length;
  }

  return cnt;
}
