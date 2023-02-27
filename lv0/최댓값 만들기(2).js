function solution(numbers) {
  let max = numbers[0] * numbers[1];

  for (let i = 0; i < numbers.length - 1; i++) {
    const first = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      const second = numbers[j];

      if (max < first * second) {
        max = first * second;
      }
    }
  }

  return max;
}
