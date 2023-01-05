var reverseWords = function (s) {
  return s
    .split(" ")
    .reduce((acc, word) => {
      return acc + `${word.split("").reverse().join("")} `;
    }, "")
    .trim();
};

console.log(reverseWords("Let's take LeetCode contest"));
