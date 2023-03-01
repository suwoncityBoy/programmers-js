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

function solution(numbers) {
  const BruteForce = [];
  // 모든 경우의 수를 구함
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        BruteForce.push(numbers[i] * numbers[j]);
      }
    }
  }

  //최댓값 출력
  return Math.max(...BruteForce);
}
