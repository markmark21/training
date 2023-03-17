function highAndLow(numbers){
    let result = ''
    let array = numbers.split(' ');
    let max = Math.max(...array);
    let min = Math.min(...array);
    return `${max} ${min}`;
    
    
  }