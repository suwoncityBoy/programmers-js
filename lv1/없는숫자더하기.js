function solution(numbers) {
  let arr = 0
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      arr += i
    }
  }
  return arr
}