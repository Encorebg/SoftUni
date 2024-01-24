function equalpairs(input){
    let index = 0;
    let n = Number(input[index++]);
    let count = 2*n;
    let currPair = 0;
    let lastPair = 0;
    let diff = 0;
    let maxDiff = 0;

    for (let i = 0; i < count; i+= 2){
        let numberOne = Number(input[index++]);
        let numberTwo = Number(input[index++]);
        currPair = numberOne + numberTwo;
        
        if(currPair != lastPair && i > 0){
            diff = Math.abs(currPair - lastPair);
        }
        lastPair = currPair;

        if(diff > maxDiff){
            maxDiff = diff;
        }
        
    }

    if(maxDiff !== 0){
        console.log(`No, maxdiff=${maxDiff}`);
    }else{
        console.log(`Yes, value=${lastPair}`)
    }
}
equalpairs([4,
    1,
    1,
    3,
    1,
    2,
    2,
    0,
    0
    
    
    ])