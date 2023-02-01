function solution(s) {
  let pCount = 0;
  let yCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      pCount++;
    }
    if (s[i] === "y" || s[i] === "Y") {
      yCount++;
    }
  }
  return yCount === pCount ? true : false; // yCount === pCount 로 축약가능
}

// 다른풀이

function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
