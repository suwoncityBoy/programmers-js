function solution(num, k) {
  // 29173 , 1
  let array = [...("" + num)];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == k) {
      return i + 1;
    }
  }
  return -1;
}
