function evenOdd(input){
    let position = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;
    let minOdd = 1000000000.0;
    let maxOdd = -1000000000.0;
    let minEven = 1000000000.0;
    let maxEven = -1000000000.0;
    let index = 0;

    for(let i = 1; i <= position; i ++){
        index++;
        let number = Number(input[index]);

        if(i % 2 == 0) {
            evenSum += number;
            if(number < minEven){
                minEven = number;
            }
            if (number > maxEven){
                maxEven = number;
            }

        } else {
            oddSum += number;
            if(number < minOdd){
                minOdd = number;
            }
            if (number > maxOdd){
                maxOdd = number;
            }
        }
    }

    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if(minOdd === 1000000000.0){
        console.log("OddMin=No,");
    }else{
        console.log(`OddMin=${minOdd.toFixed(2)},`);
    }
    if(maxOdd === -1000000000.0){
        console.log("OddMax=No,");
    }else{
        console.log(`OddMax=${maxOdd.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if(minEven === 1000000000.0){
        console.log("EvenMin=No,");
    }else{
        console.log(`EvenMin=${minEven.toFixed(2)},`);
    }

    if(maxEven === -1000000000.0){
        console.log("EvenMax=No");
    }else{
        console.log(`EvenMax=${maxEven.toFixed(2)}`);
    }
}

evenOdd([0])