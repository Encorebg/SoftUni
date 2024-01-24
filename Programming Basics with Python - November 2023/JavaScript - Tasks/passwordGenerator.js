function passwordGenerator(input){
    let n = Number(input[0]);
    let l = Number(input[1]);
    let res = '';
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            for(let k = 97; k < 97 + l; k++){
                for(let d = 97; d < 97 + l; d++){
                    for(let f = 1; f <= n; f++){
                        if(f > i && f > j){
                            res += `${i}${j}${String.fromCharCode(k)}${String.fromCharCode(d)}${f} `
                        }

                    }
                }
            }
        }
    }
    console.log(res);
}

passwordGenerator([2,4])