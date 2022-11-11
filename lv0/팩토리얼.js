function solution(n) {
  let res = 0
  for (let i = 1; i <= 10; i++) {
    if (n >= fact(i)) {
      res = i
      continue
    } else {
      break
    }
  }
  return res
}

function fact(num) {
  if (num > 1) return num * fact(num - 1)
  return num
}