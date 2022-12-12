var number = function(busStops){
    let people=0
  for(let i=0;i<busStops.length;i++){
    let stops=busStops[i]
    let getOn=stops[0]
    let getOf=stops[1]
    people += getOn
    people -= getOf
    }
    return people
  }
console.log(number([[5,0],[6,2],[4,1]]))