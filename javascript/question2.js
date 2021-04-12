// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
  const numberArray=[];
  for(let n=i; n<=j; n++){
    numberArray.push(n);
  }
  
  const resultArray = [];
  for(let a=0; a < numberArray.length; a++){
    if(Math.abs(numberArray[a] - splitAndReverseNumber(numberArray[a])) % k === 0){
      resultArray.push(numberArray[a])
    }
  }
  return resultArray.length;
}

/**
 * Helper function
 * takes in an integer
 * converts to string and reverses it
 * then converts back to integer
 * @param {integer} n 
 * @returns integer
 */
function splitAndReverseNumber(n){
  return Number(n.toString().split('').reverse().join(''));
}

module.exports = beautifulDays