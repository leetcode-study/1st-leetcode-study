function solution(id_list, report, k) {
  const answer = {}
  const result = {}

  for (id of id_list) {
    answer[id] = []
  }

  for (item of report) {
    const [aId, bId] = item.split(' ')
    if (!answer[aId].includes(bId)) answer[aId].push(bId)
  }

  for (idList of Object.values(answer)) {
    for (id of idList) {
      if (result[id]) result[id] += 1
      else result[id] = 1
    }
  }

  return id_list.map((id) => answer[id].filter((v) => result[v] >= k).length)
}
