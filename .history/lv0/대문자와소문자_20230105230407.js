function solution(my_string) {
  return [...my_string]
    .map((el) =>
      el.charCodeAt() >= 65 && el.charCodeAt() < 97
        ? el.toLowerCase()
        : el.toUpperCase()
    )
    .join("");
}
