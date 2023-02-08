function disemvowel(str) {
    let arr=['a', 'e', 'i', 'o', 'u']
    for (let i=0;i<arr.length;i++){
        str=str.replace(/[aeiou]/gi,'')
    }
    return str;
  }
  console.log(disemvowel("This website is for losers LOL!"))