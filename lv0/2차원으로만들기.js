function solution(num_list, n) {
  let result = []
  for(let i = 0 ; i < num_list.length; ) {
      let sliceN = []
      for(let j = 0 ; j < n ; j++) {
          sliceN.push(num_list[i])
          i++
      }
      result.push(sliceN)
  }
  return result
}

// 다른풀이 


function solution(num_list, n) {
    var answer = [];

    for (let i = 0; i<num_list.length; i=i+n){
        answer.push(num_list.slice(i, i+n));
    }

    return answer;
}

