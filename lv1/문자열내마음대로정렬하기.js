function solution(strings, n) {
  return strings.sort((nextEl, prevEl) => {
    if (nextEl[n] > prevEl[n]) return 1;
    else if (nextEl[n] < prevEl[n]) return -1;
    else return nextEl > prevEl ? 1 : -1;
  });
}
