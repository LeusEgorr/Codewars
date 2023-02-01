var Ghost = function() {
  this.color=['white','red','purple','yellow'][Math.floor(Math.random()*4)]
  return this.color
}
console.log(Ghost())