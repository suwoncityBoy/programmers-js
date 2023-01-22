function solution(a, b) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    let sum = a[i] * b[i];
    newArr.push(sum);
  }
  return newArr.reduce((acc, next) => acc + next);
}

// 위 코드는 반복문을 두번돌린다, 불필요한 반복문을 제거 후 시간복잡도를 고려해서 풀어보자.
function solution(a, b) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

//reduce 로만 풀어본 로직
function solution(a, b) {
  return a.reduce((acc, next, i) => (acc += a[i] * b[i]), 0);
}
