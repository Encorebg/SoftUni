function manOwar(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maximumHealth = Number(input.shift());

    for (const line of input) {

        if (line === "Retire") {
            break;
        }

        let tokens = line.split(" ");
        let command = tokens.shift();

        switch (command) {
            case "Fire":
                let [index, fireDamage] = tokens.map(Number);

                if (warShip[index]) {
                    warShip[index] -= fireDamage;
                    if (warShip[index] <= 0) {
                        console.log(`You won! The enemy ship has sunken.`);
                        return;
                    }
                }
                break;
            case "Defend":
                let [startIndex, endIndex, damage] = tokens.map(Number);

                if (pirateShip[startIndex] && pirateShip[endIndex]) {

                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= damage;
                        if (pirateShip[i] <= 0) {
                            console.log("You lost! The pirate ship has sunken.");
                            return;
                        }
                    }

                }
                break;
            case "Repair":
                let [repairIndex, health] = tokens.map(Number);
                if(pirateShip[repairIndex]){
                    pirateShip[repairIndex] += health;
                    if(pirateShip[repairIndex] > maximumHealth){
                        pirateShip[repairIndex] = maximumHealth;
                    }
                }
                break;
            case "Status":
                let counter = 0;
                for (const needRepair of pirateShip) {
                    if(needRepair < maximumHealth * 0.2){
                        counter++;
                    }
                    
                }
                console.log(`${counter} sections need repair.`);
                break;
        }

    }
    let pirateShipStatus = pirateShip.reduce((a, b) => a + b, 0);
	let warShipStatus = warShip.reduce((a, b) => a + b, 0);

	console.log(`Pirate ship status: ${pirateShipStatus}`);
	console.log(`Warship status: ${warShipStatus}`);
}
manOwar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])
