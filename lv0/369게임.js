function solution(order) {
  let array = [...(order + "")];
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 3 || array[i] == 6 || array[i] == 9) {
      cnt++;
    }
  }
  return cnt;
}

// 다시 푼 풀이

const solution = (order) =>
  [...(order + "")].filter((a) => ["3", "6", "9"].includes(a)).length;
