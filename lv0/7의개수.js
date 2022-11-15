function solution(array) { // 7 , 77 , 17
  let splitEl = array.join('').split('')
  let filterArray = splitEl.filter(n => n === '7').length
  return filterArray
}