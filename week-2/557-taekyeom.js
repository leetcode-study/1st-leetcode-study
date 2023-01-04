/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arr = s.split(' ')

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i].split('')
    let lt = 0
    let rt = tmp.length - 1

    while (lt < rt) {
      ;[tmp[lt], tmp[rt]] = [tmp[rt], tmp[lt]]
      lt++
      rt--
    }

    arr[i] = tmp.join('')
  }

  return arr.join(' ')
}

/**
 * A couple of JavaScript O(n) solutions
 */
var reverseWords = function (s) {
  let res = ''
  let word = ''
  for (let c of s) {
    if (c === ' ') {
      res += word + c
      word = ''
    } else {
      word = c + word
    }
  }
  return res + word
}
