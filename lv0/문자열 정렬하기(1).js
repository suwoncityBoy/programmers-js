function solution(my_string) {
  const arr = [...my_string].map(Number).filter((el) => !isNaN(el));
  return arr.sort((a, b) => a - b);
}
