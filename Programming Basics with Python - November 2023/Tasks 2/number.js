function number(input) {
    let moves = Number(input[0]);
    let index = 1;
    let totalPoints = 0;
    let invalid = 0;
    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;
    let fifth = 0;
    


    for(let i = 0; i < moves; i++) {
        let number = Number(input[index]);

        if (number >= 0 && number <= 9) {
            first++;
            let bonus = number * 0.2;
            totalPoints += bonus;
        } else if (number > 9 && number <= 19) {
            second++;
            let bonus = number * 0.3;
            totalPoints += bonus;

        } else if (number > 19 && number <= 29) {
            third++;
            let bonus = number * 0.4;
            totalPoints += bonus;
        } else if (number > 29 && number <= 39) {
            fourth++;
            let bonus = 50;
            totalPoints += bonus;
        } else if (number > 39 && number <= 50) {
            fifth++;
            let bonus = 100;
            totalPoints += bonus;
        } else { 
            invalid++;
            totalPoints /= 2;
        
        }
        index++;
        
    }
    let firsPercent = first / moves * 100;
    let secondPercent = second / moves * 100;
    let thirdPercent = third / moves * 100;
    let fourthPercent = fourth / moves * 100;
    let fifthPercent = fifth / moves * 100;
    let invalidPercent = invalid / moves * 100;

    console.log(`${totalPoints.toFixed(2)}`)
    console.log(`From 0 to 9: ${firsPercent.toFixed(2)}%`)
    console.log(`From 10 to 19: ${secondPercent.toFixed(2)}%`)
    console.log(`From 20 to 29: ${thirdPercent.toFixed(2)}%`)
    console.log(`From 30 to 39: ${fourthPercent.toFixed(2)}%`)
    console.log(`From 40 to 50: ${fifthPercent.toFixed(2)}%`)
    console.log(`Invalid numbers: ${invalidPercent.toFixed(2)}%`)

}   
number([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20,
    ])