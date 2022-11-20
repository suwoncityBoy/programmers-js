function solution(a, b) { // 3 , 5
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  let array = 0
  for (let i = min; i <= max; i++) {
    array += i
  }
  return array
}