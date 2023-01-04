function solution(my_string) {
  let regex = /[^0-9]/g; // 숫자가아닌 문자열을 선택하는 정규식
  let result = my_string.replace(regex, ""); // 선택된 문자열을 빈 문자로 변경
  return [...result].map((num) => Number(num)).reduce((a, b) => a + b, 0);
}
