function solution(id_list, report, k) {
    var answer = [];
    
    var accuesedMap = {}
    var result = new Map();
    id_list.forEach(id => {
        result.set(id, 0);
    })
    
    report.forEach((record) => {
       let [accuser, accused] = record.split(" ") 
        if(accuesedMap[accused]){
            accuesedMap[accused].add(accuser)
        }else{
            accuesedMap[accused] = new Set([accuser])
        }
    })
    
    for (const [key, value] of Object.entries(accuesedMap)) {
        let accusedCount = value.size
        if(accusedCount >= k){
            value.forEach((accuser) => {
              result.set(accuser, result.get(accuser) + 1)
          })
        }
    }
    
    answer = Array.from(result.values())
    
    return answer;
}
