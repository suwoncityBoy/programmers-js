function solution(a, b) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    let sum = a[i] * b[i];
    newArr.push(sum);
  }
  return newArr.reduce((acc, next) => acc + next);
}
