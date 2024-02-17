function theLift(input) {
    let peopleWating = Number(input.shift());
    let wagons = input.shift().split(" ").map(Number);

    for (let index = 0; index < wagons.length; index++) {
        let currentWagon = wagons[index];

        while (currentWagon !== 4) {
            currentWagon++;
            peopleWating--;
            if (peopleWating == 0) {
                break;
            }
        }

        wagons[index] = currentWagon;
        if (peopleWating == 0) {
            break;
        }

    }
    let emptyWagons = wagons.filter(w => w !== 4);

    if (peopleWating === 0 && emptyWagons.length === 0) {
        console.log(wagons.join(" "));
    } else if (emptyWagons.length != 0){
        console.log("The lift has empty spots!");
        console.log(wagons.join(" "));
    }else{
        console.log(`There isn't enough space! ${peopleWating} people in a queue!`);
        console.log(wagons.join(" "));
    }


}
theLift([
    "15",
    "0 0 0 0 0"
   ]
   )