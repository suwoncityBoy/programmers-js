function solution(arr) {
  let sum = 0
  let avg = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return avg = sum / arr.length
}