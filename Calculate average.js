function findAverage(array) {
    for(i=0;i<array.length;i++){
      const result=(array.reduce((partialSum, a) => partialSum + a, 0))/array.length
      return result;
      }
  }