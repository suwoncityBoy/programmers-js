function solution(array) {
  let arr = []
  let max = 0
  let maxi = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
      maxi = i
    }
  }
  return arr = [max, maxi]
}