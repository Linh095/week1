const maxProfit = function(priceArray) {  
  const pDiff = (previousPrice, currentPrice) => currentPrice - previousPrice;

  if (priceArray.length < 2) {
      return "not enough data";
  }

  let maxProfit = 0;
  let pricePairs = [];
  for (let p = 0; p < priceArray.length; p++) {
    for (let n = priceArray.length - 1; n >= 0; n--) {
      if (n > p) {
        pricePairs.push(priceArray[n] - priceArray[p]);
      }
    }
  }
  
  pricePairs.sort(pDiff);
  return pricePairs[0];
};

console.log(maxProfit([]));
console.log(maxProfit([1]));
console.log(maxProfit([1, 2, 3, 1, 8, 10, 3]));