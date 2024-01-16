function counterStrike(input){

    let energy = Number(input[0]);
    let index = 1;
    let command = input[index];
    let wonCounter = 0;
    let notEnoughEnergy = false;

    while (command != "End of battle") {
        command = Number(command);
        if (energy < command){
            notEnoughEnergy = true;
            break;
        }
        index ++;
        energy -= command;
        wonCounter += 1;
        if (wonCounter % 3 == 0){
            energy += wonCounter;
        }
        command = input[index]

    
    }

    if(notEnoughEnergy){
        console.log(`Not enough energy! Game ends with ${wonCounter} won battles and ${energy} energy`)
    } else {
        console.log(`Won battles: ${wonCounter}. Energy left: ${energy}`)
    }
}

counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])
