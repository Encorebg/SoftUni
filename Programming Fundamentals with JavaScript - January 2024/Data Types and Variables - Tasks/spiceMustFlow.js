function spiceMustFlow(startingYeld){
    let dayCounter = 0;
    let totalSpice = 0;


    while(startingYeld > 99){
        dayCounter++;
        totalSpice += startingYeld;
        if(totalSpice >= 26){
            totalSpice -= 26;
        }
        startingYeld -= 10;

    }

    if(totalSpice >= 26){
        totalSpice -= 26;
    }

    console.log(dayCounter);
    console.log(totalSpice);
}

spiceMustFlow(450)