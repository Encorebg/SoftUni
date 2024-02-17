function hearthDelivery(input){
    let firstLine = input.shift().split("@").map(Number)

    let nextline = input.shift();
    let total = 0;

    while(nextline != "Love!"){
        let result = nextline.split(" ");
        total += Number(result[1]);

        if (total > firstLine.length - 1){
            total = 0;
        }

        if (firstLine[total] === 0){
            console.log(`Place ${total} already had Valentine's day.`);
        }else{
            firstLine[total] = firstLine[total] - 2;
            if (firstLine[total] === 0){
                console.log(`Place ${total} has Valentine's day.`);
            }
        }
        nextline = input.shift();  
    }

    console.log(`Cupid's last position was ${total}.`);
    let resultArr = [];
    let flagResult = true;

    for (let element of firstLine){
        if(element !== 0){
            flagResult = false;
            resultArr.push(element)
        }
    }
    if(flagResult){
        console.log("Mission was successful.");
    } else{
        console.log(`Cupid has failed ${resultArr.length} places.`);
    }
}

hearthDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])

