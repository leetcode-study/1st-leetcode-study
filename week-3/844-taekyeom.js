/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let result1 = "";
  let result2 = "";

  s.split("").forEach((v) => {
    if (v === "#") {
      result1 = result1.slice(0, -1);
    } else {
      result1 += v;
    }
  });

  t.split("").forEach((v) => {
    if (v === "#") {
      result2 = result2.slice(0, -1);
    } else {
      result2 += v;
    }
  });

  return result1 === result2;
};
