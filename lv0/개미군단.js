function solution(hp) {
  let fiveHp = Math.floor(hp / 5);
  let threeHp = Math.floor((hp - fiveHp * 5) / 3);
  let oneHp = Math.floor(hp - fiveHp * 5 - threeHp * 3);
  return fiveHp + threeHp + oneHp;
}
