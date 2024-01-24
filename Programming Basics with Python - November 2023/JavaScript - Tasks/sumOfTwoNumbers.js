function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    isFound = false;
    counter = 0;
    let first =  0;
    let second = 0;

    for(let i = start; i <= end; i++){
        if (isFound){
            break;
        }
        for(let j = start; j <= end; j++){
            if (isFound){
                break;
            }
            counter++;
            if(i + j == magicNumber){
                first = i;
                second = j
                isFound = true;
            }  
        }
    }
    isFound? console.log(`Combination N:${counter} (${first} + ${second} = ${magicNumber})`)
    :console.log(`${counter} combinations - neither equals ${magicNumber}`);
}
sumOfTwoNumbers([1,10,5]);