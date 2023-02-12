function solution(s) {
  let array = [];
  let test = s.split(" ");

  for (let i = 0; i < test.length; i++) {
    let str = test[i].split("");
    for (let j = 0; j < test[i].length; j++) {
      if (j === 0) {
        str[j] = str[j].toUpperCase();
      } else {
        str[j] = str[j].toLowerCase();
      }
    }
    array.push(str.join(""));
  }

  return array.join(" ");
}
