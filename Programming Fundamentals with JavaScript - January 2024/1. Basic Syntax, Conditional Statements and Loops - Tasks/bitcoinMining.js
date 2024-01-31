function bitcoinMining(array){
    let bitcoin = 11949.16;
    let gold = 67.51;
    let day = 1;
    let firstDay = 0;
    let totalMoney = 0;
    let bitcoinBought = 0;
    let bitcoinCounter = 0;
    let sumBitcoin = 0;

    for(let index = 0; index < array.length; index++){
        let element = array[index];

        if (day % 3 == 0){
            element *= 0.7;
        }
        let singleDayEarning = element * gold;
        totalMoney += singleDayEarning;

        if (totalMoney >= bitcoin) {
            bitcoinCounter++;
            bitcoinBought = Math.floor(totalMoney / bitcoin);
            totalMoney -= bitcoin * bitcoinBought;
            sumBitcoin += bitcoinBought;
        }

        if (bitcoinCounter === 1) {
            firstDay = day;
        }
        day ++;
    }

    console.log(`Bought bitcoins: ${sumBitcoin}`)

    if (bitcoinBought !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)


}
bitcoinMining([3124.15, 504.212, 2511.124])