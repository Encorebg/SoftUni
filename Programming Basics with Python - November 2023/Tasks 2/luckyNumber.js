function luckyNumber(input) {
    const num = Number(input[0]);
    let res = "";
    for(let i = 1; i <= 9; i++){
        for(let j = 1; j <= 9; j++){
            for(let k = 1; k <= 9; k++){
                for(let z = 1; z <=9; z++){
                    if ((i + j === k + z) && num % (i + j) == 0){
                        res += `${i}${j}${k}${z} `
                    }

                }
            
            }
        }
    }
    console.log(res);
}
luckyNumber([24])