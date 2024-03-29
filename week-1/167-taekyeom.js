/**
 * 167. Two Sum II - Input Array Is Sorted
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let lt = 0
  let rt = numbers.length - 1

  while (lt < rt) {
    let sum = numbers[lt] + numbers[rt]

    if (sum === target) {
      return [lt + 1, rt + 1]
    } else if (sum > target) {
      rt--
    } else {
      lt++
    }
  }
}

let numbers = [2, 7, 11, 15]
let target = 9
console.log(twoSum(numbers, target)) // [1, 2]
