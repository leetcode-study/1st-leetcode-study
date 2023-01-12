/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  while (1) {
    n = n
      .toString()
      .split("")
      .map((v) => Number(v) ** 2)
      .reduce((acc, cur) => (acc += cur), 0);

    if (n.toString().length === 1) break;
  }

  return n === 1 || n === 7;
};
