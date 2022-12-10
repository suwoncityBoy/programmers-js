function solution(my_string) {
  let filter = ["a", "e", "i", "o", "u"];
  return [...my_string].filter((string) => !filter.includes(string)).join("");
}
