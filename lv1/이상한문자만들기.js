function solution(s) {
  let arr = s.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    let words = arr[i]
      .split("")
      .map((word, idx) => {
        if (idx % 2 === 0) {
          return word.toUpperCase();
        } else if (word % 2 !== 0) {
          return word.toLowerCase();
        }
      })
      .join("");

    result.push(words);
  }

  return result.join(" ");
}
