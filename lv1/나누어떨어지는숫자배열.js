function solution(arr, divisor) {
  const filter = arr.filter((el) => el % divisor === 0);
  return filter.length === 0 ? [-1] : filter.sort((a, b) => a - b);
}
