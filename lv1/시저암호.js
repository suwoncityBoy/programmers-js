function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let str = s.charCodeAt(i);
    if (str <= 90) {
      str += n;
      if (str > 90) str -= 26;
    } else {
      str += n;

      if (str > 122) str -= 26;
    }
    result += String.fromCharCode(str);
  }

  return result;
}
