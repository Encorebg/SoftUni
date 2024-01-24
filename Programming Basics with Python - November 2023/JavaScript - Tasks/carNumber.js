function carNumber(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let result = "";
    for (let i = start; i <= end; i++){
        for(let j = start; j <= end; j++){
            for(let k = start; k <= end; k++){
                for(let z = start; z <= end; z++){
                    if(i % 2 == 0 && z % 2 != 0 && i > z && (j + k) % 2 == 0){
                        result += `${i}${j}${k}${z} `
                    } else if((i % 2 != 0 && z % 2 == 0 && i > z && (j + k) % 2 == 0)){
                        result += `${i}${j}${k}${z} `
                    }
                }
            }
        }
    }
    console.log(result);
}
carNumber([3,5])