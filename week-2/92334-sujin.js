function solution(id_list, report, k) {
    let answer = Array(id_list.length).fill(0);
    let reportInfo = {}
    for (let i = 0; i < id_list.length; i++) {
        reportInfo[id_list[i]] = new Set()
    }

    for (let i = 0; i < report.length; i++) {
        const arr = report[i].split(' ')
        const reporter = arr[0]
        const reported = arr[1]
        reportInfo[reported].add(reporter)
    }

    for (let i = 0; i < id_list.length; i++) {
        for (const report in reportInfo) {
            if (reportInfo[report].has(id_list[i])) {
                if (reportInfo[report].size >= k) {
                    answer[i]++
                }
            }
        }
    }

    return answer;
}