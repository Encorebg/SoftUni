function average(input){
    let a = Number(input[0]);
    let index = 0;
    let sum = 0;

    for (let i = 1 ; i <= a; i++){
        index++;
        b = Number(input[index]);

        sum += b;

    }
    let average = sum / a;
    console.log(average.toFixed(2));
}