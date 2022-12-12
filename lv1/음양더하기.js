function solution(absolutes, signs) {
  //[4,7,12]  [true,false,true]
  let solution = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      solution += absolutes[i];
    } else {
      solution -= absolutes[i];
    }
  }
  return solution;
}
