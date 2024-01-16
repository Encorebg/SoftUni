function backToThePast(input) {
    let money = input.shift();
    let lastYear = input.shift();
    let ivanYears = 18; 

    for(let year = 1800; year <= lastYear; year++){
        if (year % 2 == 0){
            money -= 12000;
        }else {
            money -= 12000 + (50 * ivanYears);

        }
        ivanYears++;
    }
    
    if (money >= 0){
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    }else{
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }

}

backToThePast([100000.15,
    1808
    
    ])