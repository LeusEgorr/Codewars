function getMiddle(s){
    if((s.length%2)==1){
    position=s.length/2 
    return s.substring(position,position+1)
    } else{
    position=s.length/2-1;
    return s.substring(position,position+2)
   }
   }