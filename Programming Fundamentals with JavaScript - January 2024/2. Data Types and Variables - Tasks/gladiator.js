function gladiator(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let totalPrice = 0;
    let shieldBroken = 0

    for (let lostNumber = 1; lostNumber <= lostFight; lostNumber++){
        if (lostNumber % 2 == 0){
            totalPrice += helmetPrice;
        }
        if (lostNumber % 3 == 0){
            totalPrice += swordPrice;
        }

        if (lostNumber % 6 == 0){
            shieldBroken++;
            totalPrice += shieldPrice
            
            if (shieldBroken % 2 == 0){
                totalPrice += armorPrice;
            }

        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}