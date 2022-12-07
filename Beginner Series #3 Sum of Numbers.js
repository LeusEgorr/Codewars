function getSum( a,b ){
    let n=0
    if (a<b){
      for(let i=a;i<=b;i++){
        n=n+i
      }}
       else{
         for(let i=b;i<=a;i++){
           n=n+i
         }
       }
     return n
 }