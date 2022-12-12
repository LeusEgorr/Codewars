function bmi(weight, height) {
    const bmI=weight/(Math.pow(height,2))
    if(bmI<=18.5){
        return 'Underweight'
    }
    if(bmI<=25){
        return 'Normal'
    }
    if(bmI<=30){
        return 'Overweight'
    }
    if(bmI>30){
        return 'Obese'
    }
  }
  console.log(bmi(80,1.8))