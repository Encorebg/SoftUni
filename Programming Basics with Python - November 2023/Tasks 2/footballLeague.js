function footballLeague(input){
    let capacity = Number(input[0]);
    let numberOfFans = Number(input[1]);
    let index = 2;
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for(let i = 0; i < numberOfFans; i++){
        let sector = input[index];

        if(sector === "A"){
            sectorA++;
        }else if(sector === "B"){
            sectorB++;
        }else if(sector === "V"){
            sectorV++;
        }else if(sector === "G"){
            sectorG++;
        }
        index++;
    }

    let sectorAPercent = sectorA / numberOfFans * 100;
    let sectorBPercent = sectorB / numberOfFans * 100;
    let sectorVPercent = sectorV / numberOfFans * 100;
    let sectorGPercent = sectorG / numberOfFans * 100;
    let allFensPercent = numberOfFans / capacity * 100;
    
    console.log(`${sectorAPercent.toFixed(2)}%`);
    console.log(`${sectorBPercent.toFixed(2)}%`);
    console.log(`${sectorVPercent.toFixed(2)}%`);
    console.log(`${sectorGPercent.toFixed(2)}%`);
    console.log(`${allFensPercent.toFixed(2)}%`);

}