function treasureHunt(input) {
    let chest = input.shift().split("|");

    for (let line of input) {
        if (line === "Yohoho!") {
            break;
        }

        let [command, ...elements] = line.split(" ");

        switch (command) {
            case "Loot":
                for (let item of elements) {
                    if (!chest.includes(item)) {
                        chest.unshift(item);
                    }
                }
                break;
            case "Drop":
                let index = Number(elements[0]);

                if (index >= 0 && index < chest.length) {
                    let tempItem = chest[index];
                    chest.splice(index, 1);
                    chest.push(tempItem);
                }
                break;
            case "Steal":
                let itemCount = Number(elements[0])
                let stolenItems = chest.slice(-itemCount);
                chest.splice(-itemCount);
                console.log(stolenItems.join(", "));
        }
    }

    if (chest.length === 0) {
        console.log("Failed treasure hunt.");
    }
    else {
        sum = 0;
        chest.forEach(item => {
            sum += item.length;
            
        });
        let avg = sum / chest.length;
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
