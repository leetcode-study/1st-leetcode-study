function isPrime(n) {
  if (n === 1 || n === 0) return false;
  if (n === 2) return true;

  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(n, k) {
  return n
    .toString(k)
    .split("0")
    .filter((v) => isPrime(Number(v))).length;
}
