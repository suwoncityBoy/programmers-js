function solution(numbers) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    avg = sum / numbers.length;
  }
  return avg;
}

// console.log(solution(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 다른풀이

function solution(numbers) {
  var answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}
