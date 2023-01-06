function solution(phone_number) {
  let answer = phone_number.length - 4;
  return "*".repeat(answer) + phone_number.slice(-4);
}

// 다른풀이

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
