function solution(array, height) {
  count = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      count += 1
    }
  }
  return count
}