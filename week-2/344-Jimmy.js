/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let reverseI = s.length - 1 - i;
    let temp = s[reverseI];
    s[reverseI] = s[i];
    s[i] = temp;
  }
};
