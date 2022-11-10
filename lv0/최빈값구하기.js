function solution(array) {
  // const test = [ ...new Set([1,2,1])]
  // console.log(test)
  // let set = [] // 1. 중복없애는 배열
  // for (let i =0; i < array.length; i++) {
  //     if(! set.includes(array[i])) {
  //         set.push(array[i])  
  //     }      
  // }
   
  let obj = {} //2. 중복된 배열요소를 키값으로 하는 객체 생성 
  for(let i = 0; i<array.length; i++) {
      obj[array[i]] = 0
  }
  for (let value of array) {  
      obj[value] = obj[value]+ 1        
  }
  let maxValue = 0
  let maxKey = 0
  for (let key in obj) {
      const value = obj[key]
      if(maxValue < value) {
           maxValue = value
           maxKey = key 
      }
  }
  for (let key in obj) {
      const value = obj[key]
      if()
  }
  
  return +answer
}