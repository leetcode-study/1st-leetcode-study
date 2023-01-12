function isPrime(num){
    if(!num) return false
    if(num == 1) return false
    for(let i=2; i <= Math.sqrt(num); i++){
        if((num % i) == 0){
            return false
        }
    }
    return true
}

function solution(n, k) {
    var answer = 0;
    let kstring = [];
    
    let s = n % k
    n = Math.floor(n / k);
    kstring.push(s)
    
    // 진수 바꾸기 
    while(n > 1){
        s = n % k
        n = Math.floor(n / k);
        kstring.push(s)
    }
    kstring.push(n)
    
    let kstr = kstring.reverse().join("")
    
    // 0을 기준으로 나누기
    let strarr = kstr.split("0")
    strarr.forEach((el) =>{
        if(isPrime(Number(el))){
            answer++
        }
    })
    
    return answer;
}
