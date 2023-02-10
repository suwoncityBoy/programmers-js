function solution(array, commands) {
  const solution = [];

  for (let i = 0; i < commands.length; i++) {
    let x = commands[i][0]; // 2 4 1
    let y = commands[i][1]; // 5 4 7
    // slice 0부터 시작하므로 -1 해준다
    const arr = array.slice(x - 1, y);

    arr.sort((a, b) => a - b);

    let k = arr[commands[i][2] - 1];
    solution.push(k);
  }
  return solution;
}
