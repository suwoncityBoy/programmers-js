function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((acc, nextVal) => acc + nextVal, 0) > budget) {
    d.pop();
  }
  return d.length;
}

//for 문으로 푼 풀이
function solution(d, budget) {
  let cnt = 0;
  d.sort((a, b) => a - b);

  for (let el of d) {
    budget -= el;

    if (budget < 0) {
      break;
    } else {
      cnt++;
    }
  }

  return cnt;
}
