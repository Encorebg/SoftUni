function evenOddSubstraction(arr){
    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);

        if(arr[i] % 2 == 0){
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }
    let diff = (evenSum - oddSum);
    console.log(diff);
}

evenOddSubstraction([3,5,7,9])