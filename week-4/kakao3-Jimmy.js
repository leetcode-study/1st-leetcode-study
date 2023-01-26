function solution(fees, records) {
  const [basicTime, basicFee, perTime, perFee] = fees;
  const numberTime = {};
  const numberArr = [];
  let answer = [];
  function calculateTime(inTime, outTime) {
    inTime.split(" ");
  }
  records.forEach((record, i) => {
    const [time, number, status] = record.split(" ");
    numberArr.push(number);
    numberTime[number]
      ? numberTime[number].push(time)
      : (numberTime[number] = [time]);
  });
  numberArr.sort((a, b) => a - b);
  numberArr.forEach((number) => {
    if (numberTime[number].length % 2 !== 0) {
      numberTime[number].push("23:59");
    }
    let totalTime = 0;
    numberTime[number].forEach((num, i) => {
      let inTime = 0;
      let outTime = 0;
      if (i % 2 === 0) {
        inTime = num;
      } else {
        outTime = num;
      }
      let total = calculateTime(inTime, outTime);
      totalTime += total;
    });
    answer.push(totalTime);
  });
}
