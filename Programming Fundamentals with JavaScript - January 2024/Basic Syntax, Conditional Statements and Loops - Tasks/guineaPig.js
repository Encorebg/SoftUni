function guineaPig(input){
    let quantityOfFood = Number(input[0]);
    let quantityOfHay = Number(input[1]);
    let quantityCover = Number(input[2])
    let guineaWeight = Number(input[3])
    
    quantityOfFood *= 1000;
    quantityOfHay *= 1000;
    quantityCover *= 1000;
    guineaWeight *= 1000;

    for(let day = 1; day <= 30; day++){
        quantityOfFood -= 300;
        if (day % 2 == 0) {
            quantityOfHay -= quantityOfFood * 0.05;
        }
        if (day % 3 == 0){
            quantityCover -= guineaWeight * (1 / 3);
        }
    }
    if (quantityOfFood > 0 && quantityOfHay > 0 && quantityCover > 0){
        console.log(`Everything is fine! Puppy is happy! Food:\
 ${(quantityOfFood / 1000).toFixed(2)}, Hay: ${(quantityOfHay / 1000).toFixed(2)}, Cover: ${(quantityCover / 1000).toFixed(2)}.`)
    } else{
        console.log(`Merry must go to the pet store!`)
    }

}

guineaPig(["9",
"5",
"5.2",
"1"])

