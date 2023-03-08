function solution(A, B) {
  let sum = 0;
  B.sort((a, b) => b - a);
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    sum += A[i] * B[i];
  }
  return sum;
}
