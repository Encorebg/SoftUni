function secretDoor(input){
    let hunderds = Number(input[0]);
    let tens = Number(input[1]);
    let ones = Number(input[2]);

    for(let i = 2; i <= hunderds; i++){
        for(let j = 2; j <= tens; j++){
            for(let k = 2; k <= ones; k++){
                if(i % 2 == 0 && k % 2 == 0 && (j === 2 || j === 3 || j === 5 || j === 7)){
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}
secretDoor([8,2,8])

