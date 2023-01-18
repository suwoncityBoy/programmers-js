function solution(array) {
  let map = new Map();
  for (let x of array) {
    map.set(x, (map.get(x) || 0) + 1);
  }
  map = [...map].sort((a, b) => b[1] - a[1]);
  return map.length === 1 || map[0][1] > map[1][1] ? map[0][0] : -1;
}
