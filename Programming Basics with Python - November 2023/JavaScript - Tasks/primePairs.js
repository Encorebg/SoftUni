function primePairs(input) {
    let index = 0;
    let startOne = Number(input[index++]);
    let startTwo = Number(input[index++]);
    let firstDiff = Number(input[index++]);
    let secondDiff = Number(input[index]);
    let firstPrime = false;
    let secondPrime = false;
    for(let i = startOne; i <= startOne + firstDiff; i++){
        for(let b = startTwo; b <= startTwo + secondDiff; b++){
            let firstPrime = true;
            let secondPrime = true;
            for (let z = 2; z <= Math.sqrt(i); z++) {
                if (i % z === 0) {
                    firstPrime = false;
                    break;
                }
                
            }
            for (let k = 2; k <= Math.sqrt(b); k++) {
                if (b % k === 0) {
                    firstPrime = false;
                    break;
                }

                
            }
            if(firstPrime === true && secondPrime === true){
                console.log(`${i}${b}`);
            }
        }   
    }
}

primePairs([10,20,5,5]);