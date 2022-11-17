function solution(n) { // 10     1  2  5   10
  let array = []
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      array.push(i)
    }
  }
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
  }
  return sum

}