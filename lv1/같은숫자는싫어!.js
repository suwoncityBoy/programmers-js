function solution(arr) // 1, 2, 2, 3, 4
{
  let filterArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      filterArray.push(arr[i])
    }
  }



  return filterArray;
}