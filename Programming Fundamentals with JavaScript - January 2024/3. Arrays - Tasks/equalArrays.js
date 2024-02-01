function equalArrays(arr1, arr2){
    let isEqual = true;
    let sum = 0;
    let unidentical = 0;

    for(let i = 0; i < arr1.length; i++){
        arr1[i] = Number(arr1[i]);
        arr2[i] = Number(arr2[i]);

        if (arr1[i] !== arr2[i]) {
            isEqual = false;
            unidentical = i;
            break;
        }

        sum += arr1[i];
    }

    isEqual? console.log(`Arrays are identical. Sum: ${sum}`)
    : console.log(`Arrays are not identical. Found difference at ${unidentical} index`);
}