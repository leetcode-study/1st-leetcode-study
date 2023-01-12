function solution(n, k) {
  let answer = 0;
  function decimalToK(n, k) {
    let result = n;
    let remain = 0;
    let answer = [];
    while (result !== 0) {
      remain = result % k;
      result = parseInt(result / k);
      answer.unshift(remain);
    }
    return answer.join("");
  }
  function isPrime(num) {
    num = Number(num);
    if (num <= 1) {
      return false;
    }
    if (num === 2) {
      return true;
    }
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
        return false;
      }
    }
    // 나눠진 수가 없다면 해당 수는 소수이므로 return true
    return true;
  }
  n = decimalToK(n, k);
  console.log(n);
  let number = "";
  n.split("").forEach((num) => {
    if (Number(num)) {
      number += num;
    } else {
      if (isPrime(number)) {
        answer += 1;
      }
      number = "";
    }
  });
  if (number) {
    if (isPrime(number)) {
      answer += 1;
    }
  }
  return answer;
}
console.log(solution(110011, 10));

function isPrime(num) {
  if (!num || num === 1) return false;
  for (let i = 2; i <= +Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(Math.sqrt("10"));
function solution(n, k) {
  // k진법으로 나눈 후 split
  const candidates = n.toString(k).split("0");
  // 소수 개수 세기
  return candidates.filter((v) => isPrime(+v)).length;
}
// toString으로 k진수로 변환할 수 있다
