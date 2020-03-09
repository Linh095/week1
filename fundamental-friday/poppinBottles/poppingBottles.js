const initialInvestment = process.argv[2];
const initialBottles = initialInvestment / 2;

const poppingBottles = function(numberOfBottles, numberOfEmpties, numberOfCaps, totalBottles, emptiesEarned, capsEarned,) {
  
  let totalNumOfBottles = numberOfBottles + totalBottles;
  let totalEmptiesEarned = emptiesEarned;
  let totalCapsEarned = capsEarned;

  //basecase where no new bottles can be generated from empties and caps
  if (numberOfCaps < 4 && numberOfEmpties < 2) {

    //PRINT OUTPUT TO CONSOLE
    console.log(`TOTAL BOTTLES: ${totalNumOfBottles} 
    \nREMAINING BOTTLES: ${numberOfEmpties}
    \nREMAINING CAPS: ${numberOfCaps}
    \nTOTALE EARNED:
    \n   BOTTLES: ${totalEmptiesEarned}
    \n   CAPS: ${totalCapsEarned}
    `)

    //return this so that recursive function works
    return numberOfBottles;
    
  } else {
    //new bottles generated from empties
    const leftOverEmpties = numberOfEmpties % 2
    const bottlesFromEmpties = (numberOfEmpties - leftOverEmpties) / 2 ;

    //new bottles generated from caps
    const leftOverCaps = numberOfCaps % 4;
    const bottlesFromCaps = (numberOfCaps - leftOverCaps) / 4;

    //total number of new bottles
    const newBottles = bottlesFromCaps + bottlesFromEmpties;

    //KEEPING TRACK OF THE STATS
    totalEmptiesEarned = totalEmptiesEarned + bottlesFromEmpties;
    totalCapsEarned = totalCapsEarned + bottlesFromCaps;

    //do the same calculations for bottles that were genrated from new bottles
    return numberOfBottles + poppingBottles(newBottles, newBottles + leftOverEmpties, newBottles + leftOverCaps, totalNumOfBottles, totalEmptiesEarned, totalCapsEarned);
  }
};


// const total = poppingBottles(initialBottles, initialBottles, initialBottles, 0, 0, 0);
const total = poppingBottles(20, 20, 20, 0, 0, 0);

// printOutput(total);

module.exports = poppingBottles;