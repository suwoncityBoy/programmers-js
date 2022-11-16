function solution(n) {
  let arr = String(n).split("").reverse().map((number) => Number(number))
  return arr
}