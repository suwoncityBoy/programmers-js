function solution(n) {
  // 6 , 10 , 4
  // 6조각에 한판 ,  n은 사람 수 , 같은양을 먹어야함.
  let answer = 1;
  while ((answer * 6) % n !== 0) {
    answer++;
  }

  return answer;
}
