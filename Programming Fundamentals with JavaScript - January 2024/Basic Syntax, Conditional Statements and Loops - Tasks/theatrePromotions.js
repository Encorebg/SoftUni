function bitcoinMining(array) {
    let bitcoin = 11949.16;
    let gold = 67.51;
    let totalBitcoins = 0;
    let day = 0;
    let firstBitcoin = 0;
    let firstBitcoinBought = false
    let total = 0;
    let firstDay = 0 

    for(let i = 0; i < array.length; i++ ) {
        let mined = array[i];
        day++;
        if (day % 3 == 0){
            mined *= 0.7;
        }
        total += mined * gold;

        if (total >= bitcoin ){
            firstBitcoin++;
            if (firstBitcoin === 1){
                firstDay = day;
                firstBitcoinBought = true;

            }
            let bitcoinsBought = Math.floor(total / bitcoin);
            totalBitcoins += bitcoinsBought;
            total -= bitcoin * bitcoinsBought;
        }


    }

    console.log(`Bought bitcoins: ${totalBitcoins}`)
    if (firstBitcoinBought){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${total.toFixed(2)} lv.`)
}

