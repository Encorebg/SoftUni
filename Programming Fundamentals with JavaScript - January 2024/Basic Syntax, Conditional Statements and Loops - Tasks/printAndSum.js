function printAndSum(start, end) {
    let sum = 0;
    let print = "";

    for(start; start <= end; start++){
        sum += start;
        print += start + " ";
    }
    console.log(print);
    console.log(`Sum: ${sum}`)
}

printAndSum(5, 10)