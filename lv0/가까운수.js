function solution(array, n) {
  let arr = [];
  array.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < array.length; i++) {
    arr.push(Math.abs(array[i] - n));
  }

  return array[arr.indexOf(Math.min(...arr))];
}

// 다른사람 풀이

const solution = (array, n) =>
  Number(array)
    .filter(
      (a) => Math.abs(a - n) === Math.min(...array.map((a) => Math.abs(a - n)))
    )
    .sort((a, b) => a - b)[0];
