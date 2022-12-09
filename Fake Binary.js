function fakeBin(x){
    let arr=Array.from(x)
    return arr.map((i)=>{
    if (i<5){
        return 0
    }else{
        return 1}}).join('')
    }
   console.log(fakeBin('1243243223'))