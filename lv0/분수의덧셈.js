function solution(denum1, num1, denum2, num2) { // 1 , 2, 3 ,4
  let top = num1 * denum2 + num2 * denum1
  let bottom = num1 * num2
  let minnum = 1
  for (let i = 1; i <= top; i++) {
    if (top % i === 0 && bottom % i === 0) {
      minnum = i
    }
  }
  return [top / minnum, bottom / minnum]
}