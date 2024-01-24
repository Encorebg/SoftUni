function reportSystem(input) {
    let neededSUm = Number(input[0]);
    let index = 1;
    let transactionCounter = 0;
    let cashCounter = 0;
    let cardCounter = 0;
    let totalSumCash = 0;
    let totalSumCard = 0;
    let totalSum = 0;
    let enough = false;
    
    while(true){
        let priceOfItems = input[index];
        index++;
        if (priceOfItems === "End"){
            break;
        }
        if (totalSum >= neededSUm){
            enough = true;
            break;

        }
       priceOfItems = Number(priceOfItems);
       transactionCounter++;

       if (transactionCounter % 2 == 0){
        if (priceOfItems < 10){
            console.log("Error in transaction!");
        } else{
            cardCounter++;
            totalSumCard += priceOfItems;
            totalSum += priceOfItems;
            console.log("Product sold!");
        }
       } else {
        if (priceOfItems > 100){
            console.log("Error in transaction!");
        } else {
            cashCounter++;
            totalSumCash += priceOfItems;
            totalSum += priceOfItems;
            console.log("Product sold!");
        }
       }
    }
    if (enough){
        let averageCash = totalSumCash / cashCounter;
        let averageCard = totalSumCard / cardCounter;
        console.log(`Average CS: ${averageCash.toFixed(2)}`);
        console.log(`Average CC: ${averageCard.toFixed(2)}`);
    } else {
        console.log(`Failed to collect required money for charity.`);

    }


}

reportSystem([600,
    86,
    150,
    98,
    227,
    "End"
    
])