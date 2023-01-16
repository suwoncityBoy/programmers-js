function solution(s) {
  // "try hello world"
  let array = s.split(" ");
  let newArray = []; // 빈배열 생성
  for (let i = 0; i < array.length; i++) {
    // for문안에서 map메서드로 활용해서 value 값 꺼내옴
    // console.log(arr[i])
    let words = array[i]
      .split("")
      .map((word, idx) => {
        // map 함수 돌려서 중첩으로 value값을 한번더 쪼갬
        if (idx % 2 === 0) {
          // 짝수일시 대문자
          return word.toUpperCase();
        } else if (word % 2 !== 0) {
          // 홀수일시 소문자 리턴
          return word.toLowerCase();
        }
      })
      .join("");

    newArray.push(words); // 빈배열에 요소 추가
  }
  // console.log (result)
  return newArray.join(" "); // 배열 다시 합체
}
