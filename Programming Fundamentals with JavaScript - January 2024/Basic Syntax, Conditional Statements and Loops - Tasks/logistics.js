function logistics(input) {
    let nummberOfCargos = Number(input[0]);
    let totaltonnage = 0;
    let bus = 0;
    let train = 0;
    let truck = 0;
    let index = 1;
    for(let i = 0; i < nummberOfCargos; i++ ){
        let tonnage = Number(input[index]);
        totaltonnage += tonnage;
        if (tonnage <= 3){
            bus += tonnage;
        } else if(tonnage <= 11){
            truck += tonnage;
        } else {
            train += tonnage;
        }
        index ++;
    }

    let tonnageAverage = (bus * 200 + truck * 175 + train * 120) / totaltonnage;
    let busPercent = (bus / totaltonnage) * 100;
    let truckPercent = (truck / totaltonnage) * 100;
    let trainPercent = (train / totaltonnage) * 100;

    console.log(tonnageAverage.toFixed(2));
    console.log(busPercent.toFixed(2) + "%");
    console.log(truckPercent.toFixed(2) + "%");
    console.log(trainPercent.toFixed(2) + "%");
}

logistics([4,
    1,
    5,
    16,
    3
])