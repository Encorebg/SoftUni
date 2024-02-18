function exam(input){
    let needed_expirience = Number(input.shift());
    let countOfBatles = Number(input.shift());
    let expirienceTotal = 0;
    let batleCounter = 0
    isEnough = false;

    for(let batles = 1 ; batles <= countOfBatles; batles++){
        let expirience_earned = input.shift();

       

        if(batles % 3 === 0){
            expirience_earned *= 1.15;
        }
        if(batles % 5 === 0){
            expirience_earned *= 0.9
        }
        if(batles % 15 === 0){
            expirience_earned *= 1.05;
        }
        expirienceTotal += expirience_earned
        batleCounter++;

        if (expirienceTotal >= needed_expirience){
            isEnough = true
            break;
        }

    }
    if(isEnough){
        console.log(`Player successfully collected his needed experience for ${batleCounter} battles.`);
    } else{
        let diff = needed_expirience - expirienceTotal;
        console.log(`Player was not able to collect the needed experience, ${diff.toFixed(2)} more needed.`);
    }
}