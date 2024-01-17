function bills(input) {
    let months = Number(input[0]);
    let index = 1;
    let water = 20;
    let internet = 15;
    let othersTotal = 0;
    let waterTotal = 0;
    let internetTotal = 0;
    let electricityTotal = 0;

    for (let i = 1 ; i <= months; i++){
        let electricity = Number(input[index]);

        electricityTotal += electricity;
        waterTotal += water;
        internetTotal += internet;
        othersTotal += (electricity + water + internet) * 1.2;
        index++;
    }

    let average = (electricityTotal + waterTotal + internetTotal + othersTotal) / months;

    console.log(`Electricity: ${electricityTotal.toFixed(2)} lv`);
    console.log(`Water: ${waterTotal.toFixed(2)} lv`);
    console.log(`Internet: ${internetTotal.toFixed(2)} lv`);
    console.log(`Other: ${othersTotal.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}
bills([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22,
])