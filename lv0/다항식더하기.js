function solution(polynomial) {
  polynomial = polynomial.split(" ").filter((e) => e !== "+");
  let xNum = 0;
  let num = 0;
  polynomial.forEach((e) => {
    if (e.includes("x")) {
      const x = e.split("x");
      if (x[0] === "") xNum++;
      if (x[0] !== "") xNum += Number(x[0]);
    }

    if (!e.includes("x")) num += Number(e);
  });

  if (xNum !== 0 && num !== 0)
    return xNum === 1 ? `x + ${num}` : `${xNum}x + ${num}`;
  if (xNum !== 0 && num === 0) return xNum === 1 ? "x" : `${xNum}x`;
  if (xNum === 0 && num !== 0) return `${num}`;
  if (xNum === 0 && num === 0) return "0";
}
