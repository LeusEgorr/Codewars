function sumTwoSmallestNumbers(numbers) {  
  let min=Math.min(...numbers)
  let newArr= numbers.filter(el=> el != min)
  let min2=Math.min(...newArr)
  let sum=min+min2
  return sum
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))