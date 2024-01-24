function UniquePinCodes(input){
    let index = 0;

    let firstRange = Number(input[index++]);
    let secondRange = Number(input[index++]);
    let thirdRange = Number(input[index]);

    for(let i = 2; i <= firstRange; i += 2){
        for(let j = 2; j <= secondRange; j++){
            for(let k = 2; k <= thirdRange;  k += 2){
                if(j ===2 || j === 3 || j === 5 || j === 7){
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}