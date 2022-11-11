function solution(numbers) { // [1,2,6]
  let array = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        array.push(numbers[i] * numbers[j])
      }
    }
  }

  return Math.max(...array)
}