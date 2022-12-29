function solution(sides) {
  const sort = sides.sort((a, b) => a - b);
  console.log(sort);
  if (sides[2] >= sides[0] + sides[1]) {
    return 2;
  } else {
    return 1;
  }
}
