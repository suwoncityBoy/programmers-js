function solution(price, money, count) {
    
    let array = [];
    let sum = 0;
    
    for (let i = 1; i <= count; i++) {
        array.push(price * i)
        sum += array[i-1]

    }    
    return sum > money ? sum - money : 0    
}
