function twoSum(numbers, target) {
    let arr = [];
    for(let i = 0; i < numbers.length; i++) {
      for(let j = i + 1; j < numbers.length; j++) {
        if(numbers[i] + numbers[j] === target) {
          return [i, j]; 
        }
      }
    }
  };

  // Reverse List 

  function reverseList(list) {
    return list.reverse()
  }

  // Count The Digit

  function nbDig(n, d) {
    let result = '';
    for(let i = 0; i <= n; i++) {
      result += i ** 2;
    }
    return result.split(d).length - 1
  }

  // Fake binary

  function fakeBin(x){
    let bin = '';
    for(let char of x) {
      if(parseInt(char) < 5) {
        bin += '0'
      } else {
        bin += '1'
      }
    }
    return bin;
  }

  // String ends with

  function solution(str, ending){
    return (str.endsWith(ending));
  }