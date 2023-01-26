function solution(fees, records) {
  const [basicTime, basicPrice, time, price] = fees;
  const store = {};
  const answer = {};
  const statusMap = {
    IN: true,
    OUT: false,
  };

  for (record of records) {
    const [carTime, carNumber, carStatus] = record.split(" ");
    const [hour, minute] = carTime.split(":");

    if (statusMap[carStatus]) {
      store[carNumber] = Number(hour) * 60 + Number(minute);
    } else {
      const aTime = Number(hour) * 60 + Number(minute) - store[carNumber];
      answer[carNumber] = answer[carNumber] ? answer[carNumber] + aTime : aTime;
      delete store[carNumber];
    }
  }

  for (carNumber of Object.keys(store)) {
    const [hour, minute] = "23:59".split(":");
    const aTime = Number(hour) * 60 + Number(minute) - store[carNumber];
    answer[carNumber] = answer[carNumber] ? answer[carNumber] + aTime : aTime;
    delete store[carNumber];
  }

  return Object.keys(answer)
    .sort((a, b) => a - b)
    .map((v) => answer[v])
    .map((v) =>
      v > basicTime
        ? basicPrice + Math.ceil((v - basicTime) / time) * price
        : basicPrice
    );
}
