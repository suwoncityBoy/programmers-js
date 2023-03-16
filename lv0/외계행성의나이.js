function solution(age) {
  let t = String(age).split("");
  let obj = {};

  for (let i = 0; i < 10; i++) {
    obj[i] = String.fromCharCode(i + 65).toLowerCase();
  }

  let answer = t.reduce((acc, cur) => (acc += obj[cur]), "");
  return answer;
}
