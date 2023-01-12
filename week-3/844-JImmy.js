var backspaceCompare = function (s, t) {
  let i = 0;
  let answer = false;
  function removeBack(string, i) {
    if (i === 0 && string[i] === "#") {
      string = string.split("");
      string.splice(i, 1);
      return [string.join(""), i];
    }
    if (string[i] === "#") {
      string = string.split("");
      string.splice(i - 1, 2);
      return [string.join(""), i - 1];
    }
    return [string, i + 1];
  }
  while (i < s.length) {
    console.log(s, i);
    [s, i] = removeBack(s, i);
  }
  i = 0;
  while (i < t.length) {
    [t, i] = removeBack(t, i);
  }
  if (s === t) {
    return true;
  } else {
    return false;
  }
};
backspaceCompare("ab#c", "ab#c");

// v_2
var backspaceCompare = function (s, t) {
  function getString(string) {
    const answer = [];
    for (let letter of string) {
      letter === "#" ? answer.pop() : answer.push(letter);
    }
    return answer.join("");
  }
  return getString(s) === getString(t);
};
