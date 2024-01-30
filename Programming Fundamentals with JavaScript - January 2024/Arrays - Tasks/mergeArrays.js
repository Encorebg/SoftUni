function mergeArrays(arr1,arr2){
    let mergedArray = [];

    for(let i = 0; i < arr1.length; i++){
        let num1 = arr1[i];
        let num2 = arr2[i];

        if(i % 2 == 0){
            let result = Number(num1) + Number(num2);
            mergedArray.push(result);
        } else{
            let result = num1 + num2;
            mergedArray.push(result);
        }
    }
    console.log(mergedArray.join(' - '));
}