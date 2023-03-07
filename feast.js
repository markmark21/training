function feast(beast, dish) {
    let begin = beast[0] === dish[0];
    let end = beast[beast.length - 1] === dish[dish.length - 1];
    
    return begin && end;
  }