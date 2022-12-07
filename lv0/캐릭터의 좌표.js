function solution(keyinput, board) {
  let code = [0, 0];
  let maxWidth = Math.floor(board[0] / 2);
  let maxHeight = Math.floor(board[1] / 2);

  const moveFunc = (keyinput) => {
    if (keyinput === "left") {
      let moveNum = code[0] > -maxWidth ? 1 : 0;
      code[0] += -moveNum;
    }

    if (keyinput === "right") {
      let moveNum = code[0] < maxWidth ? 1 : 0;
      code[0] += moveNum;
    }

    if (keyinput === "down") {
      let moveNum = code[1] > -maxHeight ? 1 : 0;
      code[1] += -moveNum;
    }

    if (keyinput === "up") {
      let moveNum = code[1] < maxHeight ? 1 : 0;
      code[1] += moveNum;
    }
  };

  keyinput.map((el) => moveFunc(el));

  return code;
}
