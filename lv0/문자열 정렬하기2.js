function solution(my_string) {
  return my_string.toLowerCase().split("").sort().join("");
}

// 다른방식

function solution(my_string) {
  // return my_string.toLowerCase().split('').sort().join('')
  return [...my_string.toLowerCase()].sort().join("");
}
