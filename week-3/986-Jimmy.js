var intervalIntersection = function (firstList, secondList) {
  const answer = [];
  let lastIndex = 0;
  for (let x of firstList) {
    const [start, end] = x;
    for (let i = lastIndex; i < secondList.length; i++) {
      const [secondS, secondE] = secondList[i];
      if (secondS <= end && start <= secondE) {
        let sortedNum = [start, end, secondS, secondE].sort((a, b) => a - b);
        let second = sortedNum[1];
        let third = sortedNum[2];
        answer.push([second, third]);
      }
      if (end < secondS) {
        lastIndex = i === 0 ? 0 : i - 1;
        break;
      }
    }
  }
  return answer;
};

console.log(
  intervalIntersection(
    (firstList = [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ]),
    (secondList = [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ])
  )
);

var intervalIntersection = function (A, B) {
  let Ai = 0,
    Bi = 0;
  let res = [];

  while (Ai < A.length && Bi < B.length) {
    let maxStart = Math.max(A[Ai][0], B[Bi][0]);
    let minEnd = Math.min(A[Ai][1], B[Bi][1]);

    if (maxStart <= minEnd) res.push([maxStart, minEnd]); // overlap found

    if (A[Ai][1] < B[Bi][1]) Ai++;
    else Bi++;
  }

  return res;
};
