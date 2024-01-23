function coins (input){
    let oneLeva = Number(input[0]);
    let twoLeva = Number(input[1]);
    let fiveLeva = Number(input[2]);
    let sum = Number(input[3]);

    let twoLevaCounter = 0;
    let oneLevaCounter = 0;
    let fiveLevaCounter = 0;

    for(let i = 0; i <= oneLeva; i++){
        for(let j = 0; j <= twoLeva; j++){
            for(let z = 0; z <= fiveLeva; z++){
                if( i + (j * 2) +  (z * 5) == sum){
                    console.log(`${i} * 1 lv. + ${j}  * 2 lv. + ${z} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
coins([5,3,1,7])
