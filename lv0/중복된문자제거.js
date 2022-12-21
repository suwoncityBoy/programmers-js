function solution(my_string) {
  let arr = my_string.split("");
  console.log(arr);

  const set1 = [...new Set(arr)];

  return set1.join(""); // poel
}
