function safePassword(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxCount = Number(input[2]);
    let flag = false;
    let counter = 0;
    let res = "";

    for(let A = 35; A < 55; A++){
        for(let B = 64; B < 96; B++){
            for(let x = 1; x <= a; x++){
                for(let y = 1; y <= b; y++){
                    counter++;
                    if(counter > maxCount){
                        flag = true;
                        break;
                    }
                    let symbolA = String.fromCharCode(A);
                    let symbolB = String.fromCharCode(B);
                    let symbolC = x;
                    let symbolD = y;
                    let symbolE = String.fromCharCode(B);
                    let symbolF = String.fromCharCode(A);
                    res += `${symbolA}${symbolB}${symbolC}${symbolD}${symbolE}${symbolF}|`;

                    if(a === x && b === y){
                        flag = true;
                        break;
                    }
                    A++;
                    if(A > 55){
                        A = 35;
                    }
                    B++;
                    if(B > 96){
                        B = 64;
                    }
            
                }
                if(flag){
                    break;
                }
            }
            if(flag){
                break;
            }
        }
        if(flag){
            break;
        }
    }
    console.log(res);
}

safePassword([2,2,3])