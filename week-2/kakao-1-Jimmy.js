function solution(id_list, report, k) {
  const reportCt = {};
  report.forEach((ids, i) => {
    const [reporter, reported] = ids.split(" ");
    if (reportCt[reported] === undefined) {
      const set = new Set();
      reportCt[reported] = set.add(reporter);
    } else {
      reportCt[reported].add(reporter);
    }
  });
  const answer = {};
  id_list.forEach((id, i) => {
    if (reportCt[id]?.size >= k) {
      reportCt[id].forEach((id) => {
        if (!answer[id]) {
          answer[id] = 1;
        } else {
          answer[id] = answer[id] + 1;
        }
      });
    } else {
    }
  });
  id_list.forEach((id, i, arr) => {
    if (!answer[id]) {
      arr[i] = 0;
    } else {
      arr[i] = answer[id];
    }
  });
  return id_list;
}
