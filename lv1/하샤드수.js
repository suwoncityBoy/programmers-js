function solution(x) {
  let a = (x + "").split("").reduce((acc, next) => +acc + +next);
  return x % a == 0 ? true : false;
}
