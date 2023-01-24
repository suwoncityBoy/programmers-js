function solution(rsp) {
  return rsp
    .split("")
    .map((el) => {
      if (el == "2") return "0";
      if (el == "0") return "5";
      if (el == "5") return "2";
    })
    .join("");
}
