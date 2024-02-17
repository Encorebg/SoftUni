function muOnline(input) {
    let dungeonRooms = input.split("|");
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;
    for (let token of dungeonRooms) {
        token = token.split(" ");
        let command = token[0];
        let number = Number(token[1]);
        roomCounter++;

        if (command === "potion") {
            if (health + number > 100) {
                number = 100 - health
            }
            health += number;
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === "chest") {
            console.log(`You found ${number} bitcoins.`);
            bitcoins += number;
        } else {
            health -= number;

            if(health > 0){
                console.log(`You slayed ${command}.`);

            } else{
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
    }
    console.log(`You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`);
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")