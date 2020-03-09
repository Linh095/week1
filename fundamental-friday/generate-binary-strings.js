const generateBinaryString = function(numberOfDigits) {
  result = [];
  if (numberOfDigits === 0) {
    console.log(`I am in the condition when number of digit is 0`)
    return result;
  } else {
    console.log('I am in the else bracket');
    for (let digit = 0; digit < 2; digit++) {
      let possibleNumber = digit + generateBinaryString(numberOfDigits - 1);
      result.push(possibleNumber);
    }
  }
  return result;
};

console.log(generateBinaryString(0));

console.log(generateBinaryString(1));

console.log(generateBinaryString(2));