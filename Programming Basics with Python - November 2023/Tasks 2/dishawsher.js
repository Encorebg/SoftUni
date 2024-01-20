function dishwasher(input) {
    let detergentQuantity = Number(input[0]);
    detergentQuantity *= 750;
    let index = 1;
    let numberOfDishes = input[index];
    let loading = 0;
    let dishes = 0;
    let pots = 0;

    while(numberOfDishes !== "End"){
        numberOfDishes = Number(numberOfDishes);
        loading++;

        loading % 3 == 0
        ? pots += numberOfDishes
        : dishes += numberOfDishes;

        loading % 3 == 0
        ? detergentQuantity -= 15 * numberOfDishes
        : detergentQuantity -= 5 * numberOfDishes
        
        if (detergentQuantity < 0){
            break;
        }

        index++;
        numberOfDishes = input[index];
    }


    if (detergentQuantity >= 0){
        console.log(`Detergent was enough!`);
        console.log(`${dishes} dishes and ${pots} pots were washed.`);
        console.log(`Leftover detergent ${detergentQuantity} ml.`);

    } else {
        console.log(`Not enough detergent, ${Math.abs(detergentQuantity)} ml. more necessary!`);
    }
}

dishwasher([1,
    10,
    15,
    10,
    12,
    13,
    30
    
    
    ])