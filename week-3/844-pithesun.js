/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    if(getbackspaceString(s) === getbackspaceString(t)){
        return true
    }
    
    return false
};

function getbackspaceString(s){
    let stack = []
    
    for(let i=0; i < s.length; i++){
        if(s[i] !== "#"){
            stack.push(s[i])
        }else{
            stack.pop()
        }
    }
    
    return stack.join("")
}
