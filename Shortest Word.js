function findShort(s){
  let arr=s.split(' ')
  let length=arr.map(el=>el.length)
  let minNum=Math.min(...length)
  return minNum
}
 
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
