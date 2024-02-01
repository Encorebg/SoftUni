function dungeonDark(arr) {
    let roomsInfo = arr[0];
    let rooms = roomsInfo.split("|");
    let health = 100;
    let coins = 0;
    let roomCounter = 0
    for(let room of rooms){
        let tokens = room.split(" ");
        let command = tokens[0];
        let num = Number(tokens[1]);

        if (command === "potion"){
            let healthHealed = num;
            if (healthHealed + health > 100){
                healthHealed = 100 - health;
            }
            health += healthHealed;
            console.log(`You healed for ${healthHealed} hp.`)
            console.log(`Current health: ${health} hp.`);
        } else if(command === "chest"){
            coins += num;
            console.log(`You found ${num} coins.`);
        } else{
            let monsterAttack = num;
            let monsterName = command
            health -= monsterAttack;
            if( health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else{
                console.log(`You died! Killed by ${monsterName}.`);
                roomCounter++;
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
        roomCounter++;
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);

}

dungeonDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])