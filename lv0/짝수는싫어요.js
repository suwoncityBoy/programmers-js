function solution(n) {
  let array = []
  for (let i = n; i > 0; i--) {
    if (i % 2 === 1) {
      array.push(i)
    }
  }
  return array.reverse()

}