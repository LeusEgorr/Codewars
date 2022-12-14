function solution(str, ending){
    if(ending.length==0) return true
    let n=ending.length 
    if(str.slice(-n)!=ending){
      return false
      } else{
       return true
      }
  }
console.log(solution('abc', ''))