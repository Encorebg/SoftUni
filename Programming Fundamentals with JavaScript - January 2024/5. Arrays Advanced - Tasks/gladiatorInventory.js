function gladiatorInventory(input) {
    let inventory = input.shift().split(" ");

    for (let line of input) {
        let commandAndEquipment = line.split(" ")
        let command = commandAndEquipment.shift();
        let equipment = commandAndEquipment.shift();

        if (command === "Buy") {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if (command === "Trash") {
            if (inventory.includes(equipment)) {
                let indexToRemove = inventory.indexOf(equipment)
                inventory.splice(indexToRemove, 1)

            }
        } else if (command === "Repair") {
            if (inventory.includes(equipment)) {
                let indexToRepair = inventory.indexOf(equipment);
                inventory.splice(indexToRepair, 1);
                inventory.push(equipment);
            }
        } else {
            let upgradeEquipment = equipment.split("-");
                equipment = upgradeEquipment[0];
            if (inventory.includes(equipment)) {
                let indexToUpgrade = inventory.indexOf(equipment) + 1;
                let upgrade = `${equipment}:${upgradeEquipment[1]}`
                inventory.splice(indexToUpgrade, 0 , upgrade)
            }
        }

    }
    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])
