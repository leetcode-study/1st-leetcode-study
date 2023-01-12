var isHappy = function (n) {
  let isHappy = false;
  let answer = n;
  let firstNum = false;
  let cnt = 0;
  while (!isHappy) {
    cnt++;
    if (cnt > 10000) {
      return false;
    }
    let sum = 0;
    for (let x of String(answer).split("")) {
      sum += x ** 2;
      console.log(sum);
    }
    answer = sum;
    if (answer === firstNum) break;
    if (firstNum === false) {
      firstNum = answer;
    }
    isHappy = answer === 1;
  }
  return isHappy;
};

console.log(isHappy(3));
