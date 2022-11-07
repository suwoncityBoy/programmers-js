function solution(money) {
  let a = Math.floor(money / 5500)
  let jandon = money % 5500
  let arr = [a, jandon]
  return arr

}