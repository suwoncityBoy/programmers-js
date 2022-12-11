function solution(quiz) {
  // "3-4 = -3","5+6=11"

  return quiz.map((n) => {
    const [calc, sol] = n.split("=");
    return eval(calc) === Number(sol) ? "O" : "X";
  });
}
