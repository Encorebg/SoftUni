function challengeTheWedding(input) {
    let numberOfMans = Number(input[0]);
    let numberOfWomans = Number(input[1]);
    let numberOfTables = Number(input[2]);
    let tableCounter = 0;
    let flag = false;
    let result = "";
    for (let i = 1; i <= numberOfMans; i++){
        for(let j = 1; j <= numberOfWomans; j++){
            tableCounter++;
            if(tableCounter > numberOfTables){
                break;
            }
            result += `(${i} <-> ${j}) `;

        }
        if (flag){
            break;
        }
    }
    console.log(result);
}
challengeTheWedding([2,
    2,
    6,
    ])