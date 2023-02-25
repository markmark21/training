function bmi(weight, height) {
    const mass = (weight / height ** 2);
    if (mass <= 18.5){
      return "Underweight";
    } else if (mass <= 25.0) {
      return "Normal";
    } else if (mass <= 30.0) {
      return "Overweight"
    } else {
      return "Obese";
    }
    
  }