// 시도 1

function solution(s) {
  let cnt = 0;
  let arr = [...s];
  for (let i = 0; i < s.length; i++) {
    arr[i] === ")" ? cnt-- : cnt++;
  }
  return cnt === 0 ? true : false;
}

// 시도 2
function solution(s) {
  let cnt = 0;
  let arr = [...s];
  for (let i = 0; i < s.length; i++) {
    arr[i] === ")" ? cnt-- : cnt++;
    if (cnt === -1) {
      return false;
      break;
    }
  }
  return cnt === 0 ? true : false;
}
