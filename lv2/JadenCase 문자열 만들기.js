function solution(s) {
  let answer = [];
  let test = s.split(" ");

  for (let i = 0; i < test.length; i++) {
    let Upper = test[i].split("");
    for (let j = 0; j < test[i].length; j++) {
      if (j == 0) {
        Upper[j] = Upper[j].toUpperCase();
      } else {
        Upper[j] = Upper[j].toLowerCase();
      }
    }
    answer.push(Upper.join(""));
  }

  return answer.join(" ");
}
