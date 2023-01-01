function solution(s) {
  if (!(s.length == 4 || s.length == 6)) {
    return false;
  } else {
    const tmp = s.split("");
    for (let i = 0; i < tmp.length; i++) {
      if (isNaN(tmp[i])) {
        return false;
      }
    }
  }
  return true;
}
